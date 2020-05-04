import React from 'react'
import update from 'react-addons-update'

class Signup extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInput(e) {
        let field = e.target.name
        let value = e.target.value

        if (field === 'username') {
            value = value.replace(' ', '').replace('@', '').substring(0, 15)
            this.setState(update(this.state, {
                [field]: { $set: value }
            }))
        } else {
            this.setState(update(this.state, {
                [field]: { $set: value }
            }))
        }
    }


    render() {
        return (
            <div id="signup">
                <div className="signup-form">
                    <form>
                        <input type="text" value={this.state.username} 
                        placeholder="@Usuario" name="username" id="username" 
                        onChange={this.setState(update(this.state))}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup