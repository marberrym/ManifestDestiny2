import React from 'react';
import NavBar from './pageComponents/NavBar';
import APIKey from './APIKey';
import Loading from './pageComponents/Loading';

class CharacterInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            urlInfo: props.match.url.split("/"),
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(`https://www.bungie.net/Platform/Destiny2/${this.state.urlInfo[2]}/Profile/${this.state.urlInfo[3]}/Character/${this.state.urlInfo[4]}/?components=200`,
            {
                headers: {
                    "X-API-Key": APIKey
                }
            }
        )
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({loading: false});
        })
    }

    render() {

        return <div>
            <NavBar/>
            {this.props.loading ?
                <Loading />
            :
                <div>Hello</div>
            }
        </div>
    }
}

export default CharacterInfo;