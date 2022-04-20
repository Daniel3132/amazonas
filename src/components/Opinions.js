import React from 'react'
import client from '../imagenes/Ellipse 15.png'
import client2 from '../imagenes/Ellipse 16.png'

const Opinions = () => {
    return (
        <section className='opinions'>
            <h1>Opiniones de Clientes</h1>
            <div>
                <div>
                    <img src={client} alt="" />
                    <p>Amazon Customer</p>
                </div>
                <p>
                    Electronic view finder is supposed to be the best, but from 5 minutes of playing with the camera, EVF is very disappointing - despite 120Hz refresh rate, the image is very choppy and laggy, almost like watching a retro video game - nauseating. That, and the build quality compared to 5D Mark III feels very cheap - too much plastic. There are some good features though, like auto-focus, high quality video, etc.
                </p>
                <p>
                    UPDATE: The EVF appears to be definitely glitchy. Stuttering aside, 2-3 times, when it was supposed to turn on by face proximity, it flashed a white thick line on its upper edge, and then remained dark. Maybe I got a defective unit.
                </p>
                <span>A 45 personas les resulto útil</span>
                <span>Informar de un abuso</span>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <div>
                    <img src={client2} alt="" />
                    <p>Right Emboyo</p>
                </div>
                <p>
                    Long-time Canon DSLR user finally made the switch to mirrorless and now won't look back. Amazing piece of technology - focus system and low-light performance are astounding. Love that I can use my EF lenses with adapter and 24-105 f4 L "kit lens" is a worthy successor to its EF counterpart.
                </p>
                <p>
                    My biggest quandary, like many, was whether I needed the extra pixels of the R5. Coming from a 20 MP original Canon 6D I'm comfortable with this sensor size. For my uses hits the sweet spot between image quality and speed/disk space. For birds-in-flight I do miss the extra crop room, but have a hard time justifying the extra $1,500 just for that.
                </p>
                <span>A 45 personas les resulto útil</span>
                <span>Informar de un abuso</span>
            </div>

        </section>
    )
}

export default Opinions