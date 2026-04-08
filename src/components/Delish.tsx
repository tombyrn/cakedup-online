import { Grid, Paper } from '@mui/material'
import Link from 'next/link'

export default function Delish() {
    return (
        <section className="m-0 p-0 z-50">
          <div className="py-8 italic">
            <div className="my-4 px-8 text-xl">Check out our feature on </div>
            {/* <Link href="https://www.delish.com/search/?q=caked%20up%20cafe" target="_blank">  */}
            <Link href="https://youtu.be/C-M1wPQ2sAA?si=D1GmSlP00RcR4UP1" target="_blank"> 
              <div className="w-full h-12 scrolling-delish"/>
            </Link>
          </div>
        </section>

    )
}