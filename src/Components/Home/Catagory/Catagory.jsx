import '../../../styles/app.scss'
import cls from './catagory.module.scss'
import dinning from '/dinning.png'
import living from '/bedroom.png'
import bedroom from '/living.png'

export default function Catagory(){
    return (
        <section className={`${cls.wrapper} ${'container'}`} >
            <h1>browse the range</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div className={cls.types}>
                <div className={cls.type}>
                    <img  src={dinning} alt="dinning-image" />
                    <p className={cls.typeName}>dining</p>
                </div>
                <div className={cls.type}>
                    <img  src={living} alt="living-image" />
                    <p className={cls.typeName}>living</p>
                </div>
                <div className={cls.type}>
                    <img  src={bedroom} alt="bedroom-image" />
                    <p className={cls.typeName}>bedroom</p>
                </div>
            </div>
        </section>
    )
}