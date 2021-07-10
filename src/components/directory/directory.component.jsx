import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

// Class component because it will keep the state and use props to put to sub components
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [],
            sellItems: []
        };
    }

    componentDidMount(){
        fetch('sections.json')
        .then(response => response.json())
        .then(name => this.setState({sections: name}));
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, name, description, imageUrl}) => (
                        <MenuItem key={id} title={name} description={description} imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
