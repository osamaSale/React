import React, { useState } from 'react';
import Modal from "@mui/joy/Modal";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useDispatch } from 'react-redux';
import { editDevices } from '../../../../../redux/api/devices';
const Edit = ({ openEditDevice, setEditOpenDevice, device, update }) => {
    const [name, setName] = useState(device ? device.name : "")
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    return (
        <Modal
            open={openEditDevice}
            onClose={() => setEditOpenDevice(false)}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Sheet
                 sx={{
                    minWidth: 400,
                    borderRadius: "sm",
                    p: 3,
                }}
                variant="outlined"

            >
                <Stack spacing={2}>
                    <Typography component="h2">Edit Device</Typography>
                    <div className="mb-1">
                        <input type="text" className="form-control bg-transparent" placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>
                    <div className="mb-1">
                        <input type="file" className="form-control bg-transparent" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <Stack
                        direction="row-reverse"
                        justifyContent="flex-start"
                        alignItems="flex-end"
                        spacing={2}
                    >
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setLoading(true)
                                const fromData = new FormData();
                                fromData.append("id", device.id);
                                fromData.append("name", name);
                                if (image !== null) {
                                    fromData.append("image", image, image?.name);
                                } else {
                                    fromData.append("image", image);
                                }
                                dispatch(editDevices(fromData)).then((res) => {
                                    const { status } = res.payload
                                    if (status === 200) {
                                        setEditOpenDevice(false);
                                        update()
                                    }
                                    setLoading(false)
                                })
                            }}
                        >
                            {!loading && <span className="indicator-label"> Save</span>}
                            {loading && <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>}
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                setEditOpenDevice(false);
                            }}
                        >
                            Close
                        </button>
                    </Stack>
                </Stack>
            </Sheet>
        </Modal>
    );
}

export default Edit;
