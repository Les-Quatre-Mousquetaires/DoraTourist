import React, {Component} from "react";

export class TagProfileTour extends Component {
    render() {
        return <div className="tab-pane active" id="home" role="tabpanel">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Sortable table</h4>
                    <h6 className="card-subtitle">Basic sortable table</h6>
                    <table data-toggle="table"
                           data-url="https://api.github.com/users/wenzhixin/repos?type=owner&sort=full_name&direction=asc&per_page=100&page=1"
                           data-sort-name="stargazers_count" data-height="280" data-mobile-responsive="true"
                           data-sort-order="desc" className="table">
                        <thead>
                        <tr>
                            <th data-field="name" data-sortable="true"> Name</th>
                            <th data-field="stargazers_count" data-sortable="true" data-width="100"> Stars</th>
                            <th data-field="forks_count" data-sortable="true" data-width="100"> Forks</th>
                            <th data-field="description" data-sortable="true"> Description</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>;
    }
}
