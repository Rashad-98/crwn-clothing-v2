import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = (props) => {
    const categories = props.categories;
    return (
        <div className='categories-container'>
            ${
                categories.map((category)=>{
                    const title = category.title;
                    const id = category.id;
                    const imageUrl = category.imageUrl;
                    return (
                            <CategoryItem title={title} imageUrl={imageUrl} />
                    )
                })
            }
        </div>
    )
}

export default Directory;