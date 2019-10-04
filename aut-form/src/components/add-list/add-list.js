import React  from 'react';
import PropTypes from 'prop-types';

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGroupCount: 1,
      data: [
        {
          id: 1,
          ...props.dataModel,
        }
      ],
    }
  }

  render() {
    const { renderForm: RenderForm } = this.props;
    return (
      <div className="add-list">
        <span className="add-list-title">{this.props.title}</span>
        {
          this.state.data.map((dataItem) => {
            return <RenderForm key={dataItem.id} {...dataItem} />
          })
        }
      </div>
    )
  }
}

AddList.propTypes = {
  renderForm: PropTypes.func.isRequired,
  dataModel: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default AddList;
