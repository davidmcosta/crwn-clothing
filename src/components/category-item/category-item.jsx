import './category-item.styles.scss';
import category from './categories.json';

const categoryItem = ({ category }) => {
    return (
        <div className='categoriesContainer'>
            {category.map(({title, id, imageUrl}) => (
                <div key={id} className='categoryContainer'>
                    <div className='backgroundImage' style={{
                        backgroundImage: `url(${imageUrl})`
                    }}>
                        <div className='categoryBodyContainer'>
                            <h2>{title}</h2>
                            <p>Shop Now</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};