// Copyright 2022 The Casdoor Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {Component} from "react";
import * as Setting from "./Setting";
import "./index.css";
import {Button} from "antd";
import {getTheme, setThemeColor} from "./theme.js";

class SelectThemeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {theme: getTheme()};
    setThemeColor(this.state.theme);
  }

  get icon() {
    return (
      <img width={24} alt={this.state.theme} src={`${Setting.StaticBaseUrl}/img/${this.state.theme}.svg`} />
    );
  }

  changeTheme() {
    let theme = getTheme();
    this.setState((state, props) => ({
      theme: theme,
    }));
    if(theme === "light") {
      theme = "dark";
    }else{
      theme = "light";
    }
    return theme;
  }

  render() {
    return (
      <Button className="theme_btn" onClick={() => setThemeColor(this.changeTheme())} icon={this.icon}> </Button>
    );
  }
}

export default SelectThemeBox;
