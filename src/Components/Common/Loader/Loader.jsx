import cls from './loader.module.scss';




export default function Loader(){
    return <div className={cls.wrapper}>
        <p className={cls.text}>Loading...</p>
        <div className={cls.loader}></div>
    </div>
}