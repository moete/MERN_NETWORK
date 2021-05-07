import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import NewsCard from "../../groupsUi/externpAPi/NewsCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  useEffect(() => {
    console.log(props);
  }, []);
  const JoinGroup = () => {
    if (props.group.privacy === "public") {
      window.location = `http://localhost:3000/group/enter-group/${props.group._id}`;
    }
  };
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Group" src={props.group.coverphoto} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <div>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {props.group.name}
                </Typography>
                <h1>
                  <span
                    className="myClass"
                    style={{
                      border: "dotted "
                    }}
                  >
                    {props.group.privacy}{" "}
                  </span>
                </h1>
              </div>
            </React.Fragment>
          }
        />
        <ArrowDropDownCircleIcon
          onClick={JoinGroup}
          style={{ cursor: "pointer" }}
        />
      </ListItem>
    </List>
  );
}
