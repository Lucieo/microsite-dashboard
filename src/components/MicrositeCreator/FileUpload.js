import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle';
import Typography from '@material-ui/core/Typography';

const translations = window.props.translations
 
class FileUpload extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    const {classes, field} = this.props
    return (
      <>
      <Typography variant="h6" gutterBottom  className={classes.fieldTitle}>
        {translations[field]|| field}
      </Typography>
      <DropzoneArea 
        onChange={this.handleChange.bind(this)}
        dropzoneText={translations.uploadFile || "Upload your file"}
        dropzoneClass={classes.dropZone}
      />
      </>
    )  
  }
} 
 
export default withStyles(styles)(FileUpload);