import { Component } from "react";

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handelSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();

        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.handelSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handelChange}
                    name="name"
                />

                <input
                    placeholder="번호"
                    value={this.state.phone}
                    onChange={this.handelChange}
                    name="phone"
                />
                <button type="submit">등록</button>

                <div>
                    {this.state.name} {this.state.phone} 
                </div>
            </form>
        );
    }
}

export default PhoneForm;