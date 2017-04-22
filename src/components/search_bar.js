import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){
        return (
            <div className="input-group col-md-8">
                <input
                    type="text"
                    className="form-control" 
                    placeholder="Search for videos..."
                    value={this.state.term}
                    onChange={event => 
                        this.setState({term: event.target.value})}
                />
            </div>
        );
    }

}

export default SearchBar;