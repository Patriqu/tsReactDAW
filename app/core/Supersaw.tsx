import dynamic from 'next/dynamic';

import {createSupersawOscillators} from "@/app/core/service/supersawService";

const SupersawBtn = dynamic(() => import('@/app/core/view/supersawButton'), { ssr: false });

export default function Supersaw({onClick, title}: Readonly<{ onClick?: () => void, title?: string }>) {
    const playSupersaw = () => {
        createSupersawOscillators().forEach(o => {
            setTimeout(() => o.stop(), 300);
            o.start();
        });
    }

    // @ts-ignore
    return <SupersawBtn onClick={onClick ?? playSupersaw}>{title ?? 'Click me'}</SupersawBtn>
}