import { Map, Marker } from 'pigeon-maps';
import { useState } from 'react';

interface Shop {
    name: string;
    address: string;
    totalSale: number;
    logo: string;
    location: {
        coordinates: [number, number];
    };
}

interface ShopMapProps {
    shops: Shop[];
}
function formatSale(amount: number): string {
    if (amount >= 1_000_000) {
        return `$${(amount / 1_000_000).toFixed(1)}M`;
    } else if (amount >= 1_000) {
        return `$${(amount / 1_000).toFixed(1)}k`;
    }
    return `$${amount}`;
}

const ShopMap: React.FC<ShopMapProps> = ({ shops }) => {
    const [center, setCenter] = useState<[number, number]>([0, 0]);

    return (
        <div className="w-full  rounded-xl overflow-hidden ">
            <Map
                height={700}
                center={center}
                defaultZoom={2}

                onBoundsChanged={({ center }) => setCenter(center)}
            >
                {shops.map((shop, index) => (
                    <Marker
                        key={index}
                        width={40}
                        anchor={[shop.location.coordinates[1], shop.location.coordinates[0]]}
                        color="#414FF4"

                    >
                        <>
                            <div className="relative flex flex-col items-center">
                                <div className="bg-white px-3 py-1 rounded-lg shadow-md text-sm text-black">
                                    {formatSale(shop.totalSale)}
                                </div>
                                <div className="w-2 h-2 bg-white rotate-45 shadow-md absolute -bottom-1"></div>
                            </div>
                            <span className="text-xs font-semibold text-secondary">{shop.name}</span>
                        </>
                    </Marker>
                ))}
            </Map>
        </div>
    );
};

export default ShopMap;
