import React, { Component } from "react";
import FontPicker from "font-picker-react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/styles";
import styles from '../../Styles/MicrositeCreatorStyle'

const translations = window.props.translations

class FontPickerModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: "Open Sans",
    };
  }

  render() {
    const {classes}=this.props
    return (
      <div>
        <FontPicker
          apiKey="AIzaSyDAJi3sNf-zAI801ioHiL76tUeuq-bHtgc"
          activeFontFamily={this.state.activeFontFamily}
          onChange={nextFont =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
        <p className="apply-font" style={{fontWeight:"700"}}>{translations.fontExample || "Font Example"}</p>
        <Paper className={classes.fontExample}>
          <p className="apply-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec magna a arcu maximus suscipit vel vel nulla. Vivamus vestibulum nunc vitae ex volutpat hendrerit. Sed scelerisque volutpat scelerisque. Donec iaculis mi leo, et dignissim diam placerat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(FontPickerModule)