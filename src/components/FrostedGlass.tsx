export default function FrostedGlass() {
    return (
        <div className="glass">
            <svg className="hidden">
                <defs>
                    <filter id="glass" x="0%" y="0%" width="100%" height="100%">

                        <feGaussianBlur in="SourceGraphic" stdDeviation="0,10" result="blur" />
                        <feTurbulence type="fractalNoise" baseFrequency=".10" numOctaves="5" result="turbulence" />
                        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R"
                            yChannelSelector="G" result="map" />

                        <feBlend in="map" in2="blur" mode="overlay" />


                    </filter>
                </defs>
            </svg>
        </div>
    )
}