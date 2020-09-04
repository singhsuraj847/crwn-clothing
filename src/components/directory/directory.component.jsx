import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectoryItem } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItem,
});

export default connect(mapStateToProps)(Directory);
