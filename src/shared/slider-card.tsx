import './slider-card.scss'
import Placeholder from './images/placeholder.svg'

export const SliderCard = (props: {
    title: string,
    date: string,
    description: string,
    id: number
}) => {

    return (
        <div className={'card-padding'}>
            <div className={'card'}>
                <img className={'card-image'} src={Placeholder} alt={'card-img'}/>
                <div className={'card-date'}>
                    {props.date}
                </div>
                <div className={'card-title'}>
                    {props.title}
                </div>
                <div className={'card-description'}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}