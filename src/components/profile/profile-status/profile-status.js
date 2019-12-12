import React from 'react';
import styles from './profile-status.module.css';
import img from './pencil.svg';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    statusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={styles.statusBlock}>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || <img className={styles.editLogo} src={img} alt='Edit status' />}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.statusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.state.status} />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
