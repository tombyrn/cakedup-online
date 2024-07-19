import { Grid, Paper } from '@mui/material'
import Link from 'next/link'

export default function Delish() {
    return (
        <section className="m-0 p-0 z-50">
              <div className="py-8 italic">
                <div className="my-4 px-8 text-xl">Check out our features on </div>
                <Link href={"https://www.delish.com/search/?q=caked%20up%20cafe"}><div className="w-full h-12 scrolling-bg" /></Link>
              </div>

        </section>

    )
}