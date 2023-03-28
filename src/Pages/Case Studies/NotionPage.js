import React from 'react';
import { NotionRenderer } from "react-notion";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";


class App extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      blockMap: {}
    }

    const notionMap = {
      "pandora" : "40bb32f5a9684eefadda1594bff14584",
      "exceed" : "d5ddfe32e1fb44318a120476b826a547",
      "resell" : "e1f88333824f4b88889ac63319c3425b",
      "snap" : "b08fe0d42bc844198af047de096164f7",
    }
    this.endpoint = "https://notion-api.splitbee.io/v1/page/" + notionMap[this.props.id]
  }
  

  async componentDidMount() {
    const blogData = await fetch(
      this.endpoint
    ).then(res => res.json());

    this.setState({ blockMap: blogData })
  }

  render() {
    return (
      <div>
        <NotionRenderer fullPage blockMap={this.state.blockMap} />
      </div>
    )
  }
}

export default App;