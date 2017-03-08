import React from 'react';

// Stateful Component
/*class Stream extends React.Component {

    render() {
        const {tracks = []} = this.props;

        return (
            <div>
            {
                tracks.map((track, key) => {
                    return <div className="track" key={key}>{track.title}</div>;
                })
            }
            </div>
        );
    }

}*/

// Stateless functional Component
function Stream({tracks = []}) {
    return (
        <div>
            {
                tracks.map((track, key) => {
                    return <div className="track" key={key}>{track.title}</div>;
                })
            }
        </div>
    );
}

export default Stream;