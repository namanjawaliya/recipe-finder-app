import { useEffect, useState } from 'react';
import { API_URI } from '../utilities/constants';

const useCategoryDetails = (categoryName) => {
    const [categoryDetails, setCategoryDetails] = useState(null);

    useEffect(() => {
        getCategoryDetails();
    }, [categoryDetails]);

    const getCategoryDetails = async () => {
        try {
            const data = await fetch(API_URI + "/filter.php?c=" + categoryName);
            const json = await data.json();

            setCategoryDetails(json?.meals);
        } catch (e) {
            console.error(e);
        }
    };

    return categoryDetails;
}

export default useCategoryDetails;