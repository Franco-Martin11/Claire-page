import { FC } from 'react'
import { HeadingBox, SeeAll } from '../../../../components'
import HeadingHash from '../../../../components/HeadingHash/HeadingHash'
import FashionCard from './FashionCard'

const dataCard = [{ imgUrl: 'https://cdn.mos.cms.futurecdn.net/aPn7g2NxvFGyeFV7V93cj9-1600-80.png.webp', imgAlt: 'Jewelry-Trend', copyTitle: 'Jewelry trends that were all over the fall 2022 runways', id: 1 }, { imgUrl: 'https://cdn.mos.cms.futurecdn.net/aPn7g2NxvFGyeFV7V93cj9-1600-80.png.webp', imgAlt: 'Jewelry-Trend', copyTitle: 'Jewelry trends that were all over the fall 2022 runways', id: 2 }, { imgUrl: 'https://cdn.mos.cms.futurecdn.net/aPn7g2NxvFGyeFV7V93cj9-1600-80.png.webp', imgAlt: 'Jewelry-Trend', copyTitle: 'Jewelry trends that were all over the fall 2022 runways', id: 3 }]

const Fashion: FC = () => {
    return (
        <div className="fashion__container">
            <HeadingBox route='/fashion/all' section='fashion' >
            <div className="fashion__card--container">
                {dataCard.map(element => <FashionCard imgUrl={element.imgUrl} imgAlt={element.imgAlt} copyTitle={element.copyTitle} key={element.id} route={element.imgAlt} />)}
            </div>
            <SeeAll route='/123' title='see all' />
            </HeadingBox>
        </div>
    )
}

export default Fashion