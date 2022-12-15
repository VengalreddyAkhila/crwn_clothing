import { Outlet } from 'react-router-dom';
import Directory from '../../directory/directory.component'

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Hats',
            imageUrl: 'crwn-clothing-app/Stetson_Tullamore_Distressed_Leather_Safari_Hat_HatsUnlimited.com_Hats_Unlimited_STW237_Brown_Stock_Image_1__06319.jpg'
        },
        {
            id: 2,
            title: 'Jackets',
            imageUrl: 'C:/Users/91966/Desktop/React/React_Practiceprblm/crwn_clothing/crwn-clothing-app/th.jpg'
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: 'crwn-clothing-app/th (1).jpg'
        },
        {
            id: 4,
            title: 'Womens',
            imageUrl: 'crwn-clothing-app/th (2).jpg'
        },
        {
            id: 5,
            title: 'Men',
            imageUrl: 'crwn-clothing-app/th (3).jpg'
        },
    ]
    return (
        <div>
            
            <Directory categories={categories} />
            <Outlet />
        </div>
    );
}

export default Home