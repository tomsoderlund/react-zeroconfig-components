# React Zero-Config Components

React components that require _zero_ configuration.

Note: no styling, CSS must be applied elsewhere in your code.


## Components

### Table

    <Table
      array={arrayOfObjects}
      customFormat={customTableFormat.bind(undefined, options)}
    />

![Table](docs/Table.png)

### SelectDropdown

    <SelectDropdown
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![SelectDropdown](docs/SelectDropdown.png)
