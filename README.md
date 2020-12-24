# Redux Boilerplate

## This is the code needed to connect the neccessary components and actions to the global redux store:

In component file:

```bash

import {connect} from "react-redux"
import { neccessary actions } from "../actions/randomAction"
import PropTypes from "prop-types"

Component.propTypes = {
    # This is where you declare the data types of the states from mapStateToProps and
    ## actions you needed - also if they are required or not
    # e.g.
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
    
}

const mapStateToProps = state => ({
    # This is where all the states from redux that are needed for this component go
    # e.g.
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { "neccessary actions" })(Component)

```

## Below are the dependencies needed for this Redux Boilerplate:

1. redux
2. react-redux
3. redux-thunk

You can install the dependencies above by copying this in your terminal:
npm i redux react-redux redux-thunk