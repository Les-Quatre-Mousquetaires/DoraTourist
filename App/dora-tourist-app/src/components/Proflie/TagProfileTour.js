import React, {Component} from "react";
import {getBooks} from "../../actions/BookActions";
import {connect} from "react-redux";
import {MDBDataTable} from "mdbreact";



class TagProfileTour extends Component {
    constructor(props) {
        super(props);
        let {getBooks} = this.props;
        getBooks();
    }

    getData = () => {
        let data = {
            columns: [
                {
                    label: 'Mã giao dịch',
                    field: 'a',
                    sort: 'asc',
                }, {
                    label: 'Tour',
                    field: 'b',
                    sort: 'asc',
                }, {
                    label: 'Giá',
                    field: 'c',
                    sort: 'asc',
                }, {
                    label: 'Người book',
                    field: 'd',
                    sort: 'asc',
                }, {
                    label: 'Ngày book',
                    field: 'e',
                    sort: 'asc',
                }
            ]
        };
        let rows = [];
        let {books} = this.props;
        for(let i = 0; i < books.length; i++){
            rows.push({
                a: books[i]._id,
                b: books[i].tour.name,
                c: books[i].tour.price,
                d: books[i].creator.name,
                e: books[i].createdAt
            });
        }
        console.log(rows);
        data.rows = rows;
        return data;
    }

    render() {
        let data = this.getData();
        console.log(data);
        return <div className="tab-pane active" id="home" role="tabpanel">
            <div className="card">
                <div className="card-body">
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        small
                        data={data}
                    />
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.bookReducer
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getBooks: () => {
            dispatch(getBooks());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagProfileTour);
