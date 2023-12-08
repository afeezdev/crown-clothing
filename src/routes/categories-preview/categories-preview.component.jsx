import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CategoryPreviewContainer } from './categories-preview.styles';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreviewContainer>
            <CategoryPreview key={title} title={title} products={products} />
          </CategoryPreviewContainer>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
