import { DeleteOutline, InboxOutlined, InsertDriveFileOutlined, Photo, SendOutlined, Star } from "@mui/icons-material";


export const SIDEBAR_CONTENT = [
    {
        name: 'inbox',
        label: "Inbox",
        icon: Photo
    },
    {
        name: 'starred',
        label: "Starred",
        icon: Star
    },
    {
        name: 'sent',
        label: "Sent",
        icon: SendOutlined
    },
    {
        name: 'draft',
        label: "Draft",
        icon: InsertDriveFileOutlined
    },
    {
        name: 'bin',
        label: "Bin",
        icon: DeleteOutline
    },
    {
        name: 'allMail',
        label: "All Mail",
        icon: InboxOutlined
    },
    
]