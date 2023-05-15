import { Text, Html, ContactShadows, PresentationControls, Environment, useGLTF, Float } from '@react-three/drei'
import { Howl } from 'howler';

export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const headphone = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf')

    const sound = new Howl({
        src: ['./sound.wav']
    });

    function headphoneAudio() {
        if (sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
    }

    const click = new Howl({
        src: ['./click.mp3']
    });

    function keyboardAudio() {
        click.play();
    }

    return <>

        <Environment preset="city" />

        <color args={['#24242d']} attach="background" />

        <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[- 0.4, 0.2]} azimuth={[- 1, 0.75]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
            <Float rotationIntensity={0.4}>
                <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#24242d'} rotation={[- 0.1, Math.PI, 0]} position={[0, 0.55, - 1.15]} />
                <primitive object={computer.scene} onClick={keyboardAudio} position-y={- 1.2}>
                    <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0, 1.56, - 1.4]} rotation-x={-0.256}>
                        <iframe src='https://ginoportfolio.netlify.app/' />
                    </Html>
                </primitive>
                <primitive object={headphone.scene} onClick={headphoneAudio} position={[3, 0, - 1.8]} rotation-y={- 0.8} />
                <Text font='./bangers-v20-latin-regular.woff' fontSize={1} position={[2, 0.75, 0.75]} rotation-y={- 1.25} maxWidth={2} textAlign='center'>GINO CASTAGNA</Text>
            </Float>
        </PresentationControls>

        <ContactShadows position-y={- 1.4} opacity={0.4} scale={5} blur={2.4} />

    </>
}