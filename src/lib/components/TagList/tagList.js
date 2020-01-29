import React from 'react';

import { arrayOf, shape, string } from 'prop-types';

import defaultClasses from './tagList.css';
import { mergeClasses } from '@magento/venia-ui/lib/classify';

// Import the previously defined Tag component
import Tag from './tag';

// This is the main tag list component
const TagList = props => {
    // Destructure the props object into variables
    const { categories } = props;

    const classes = mergeClasses(defaultClasses, props.classes);

    // Convert the array of category objects into a list of Tag components
    const tagList = categories.map(category => {
        return <Tag key={category.name} value={category} />;
    });

    // Returns the list of Tag components inside a ul container
    return <div className={classes.root}>{tagList}</div>;
};

TagList.propTypes = {
    // categories is expected to be an object with a name and url_path string properties
    categories: arrayOf(
        shape({
            name: string.isRequired,
            url_path: string.isRequired,
            classes: shape({
                root: string
            })
        })
    )
};

export default TagList;
