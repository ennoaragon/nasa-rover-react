import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectCamera = (props) => {

  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   age: '',
  //   name: 'hai',
  // });

  const handleChange = (event) => {
    const selectedCamera = event.target.value;
    // console.log(name);
    
    // setState({
    //   ...state,
    //   [name]: event.target.value,
    // });
    props.handleSelectCamera(selectedCamera);
  };
  return (
    <div>
       <FormControl className={classes.formControl}>
        <InputLabel htmlFor="uncontrolled-native">Select Camera</InputLabel>
        <NativeSelect
          defaultValue={"FHAZ"}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native',
          }}
          onChange={handleChange}
        >
          {props.cams.map((cam) => {
            return <option value={cam}>{cam}</option>
          } )}
          {/* <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </NativeSelect>
        <FormHelperText>Uncontrolled</FormHelperText>
      </FormControl>
    </div>
  )
}

export default SelectCamera