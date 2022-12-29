import DirectoryItem from '../directory-item/directory-item.component'
import './directory.styles.scss'

const Directory = () => {

  const categories = [
    {
        id: 1,
        title: 'Hats',
        imageUrl: 'crwn-clothing-app/src/assests/th (1).jpg'
    },
    {
        id: 2,
        title: 'Jackets',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.6z4Y3l5MQNassNypA4ZyGAHaIQ&pid=Api&P=0'
    },
    {
        id: 3,
        title: 'Sneakers',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Be3ghD5XCzD8sOouNQHZigHaE8&pid=Api&P=0'
    },
    {
        id: 4,
        title: 'Womens',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.XJVddGfeufAO7SIU9CUA7wHaEK&pid=Api&P=0'
    },
    {
        id: 5,
        title: 'Men',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.4K8q158HbKJC6LnZE_idlAHaHY&pid=Api&P=0'
    },
]
  
    return(
        <div className="directory-container">
      {categories.map((category) => (
       <DirectoryItem key={category.id} category={category}/>

      ))}
      
    
    </div>
    )
}

export default Directory