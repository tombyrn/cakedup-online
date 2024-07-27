import { Paper } from "@mui/material"

export default function NotFound() {
    return (
        <div className="m-24 mt-64 flex justify-center">
            <Paper className="p-8">
                <div className="text-3xl text-pink-300">Error 404</div>
                <div className="text-3xl text-pink-300">Page Not Found</div>
            </Paper>

        </div>
    )
}