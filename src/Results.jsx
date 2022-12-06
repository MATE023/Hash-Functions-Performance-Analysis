const data = [
  {
    passwordNumber: "Password1",
    hashValueSHA: "HashValue1SHA",
    executionTimeSHA: "1",
    hashValueKeccak: "HashValue1Keccak",
    executionTimeKeccak: "1",
  },
  {
    passwordNumber: "Password2",
    hashValueSHA: "HashValue2SHA",
    executionTimeSHA: "2",
    hashValueKeccak: "HashValue2Keccak",
    executionTimeKeccak: "2",
  },
  {
    passwordNumber: "Password3",
    hashValueSHA: "HashValue3SHA",
    executionTimeSHA: "3",
    hashValueKeccak: "HashValue3Keccak",
    executionTimeKeccak: "3",
  },
  {
    passwordNumber: "Password4",
    hashValueSHA: "HashValue4SHA",
    executionTimeSHA: "4",
    hashValueKeccak: "HashValue4Keccak",
    executionTimeKeccak: "4",
  },
  {
    passwordNumber: "Password5",
    hashValueSHA: "HashValue5SHA",
    executionTimeSHA: "5",
    hashValueKeccak: "HashValue5Keccak",
    executionTimeKeccak: "5",
  },
  {
    passwordNumber: "Password6",
    hashValueSHA: "HashValue6SHA",
    executionTimeSHA: "6",
    hashValueKeccak: "HashValue6Keccak",
    executionTimeKeccak: "6",
  },
  {
    passwordNumber: "Password7",
    hashValueSHA: "HashValue7SHA",
    executionTimeSHA: "7",
    hashValueKeccak: "HashValue7Keccak",
    executionTimeKeccak: "7",
  },
  {
    passwordNumber: "Password8",
    hashValueSHA: "HashValue8SHA",
    executionTimeSHA: "8",
    hashValueKeccak: "HashValue8Keccak",
    executionTimeKeccak: "8",
  },
  {
    passwordNumber: "Password9",
    hashValueSHA: "HashValue9SHA",
    executionTimeSHA: "9",
    hashValueKeccak: "HashValue9Keccak",
    executionTimeKeccak: "9",
  },
  {
    passwordNumber: "Password10",
    hashValueSHA: "HashValue10SHA",
    executionTimeSHA: "10",
    hashValueKeccak: "HashValue10Keccak",
    executionTimeKeccak: "10",
  },
]

const setData = [
  {
    hashType: "SHA",
    executionTime: "1",
  },
  {
    hashType: "Keccak",
    executionTime: "2",
  }
]



//SHA256 tests
const LargeDataset = ({ HashType }) => {
  if (HashType == setData[0].hashType) {
    return (
      <div>
        <p>{setData[0].executionTime}</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>{setData[1].executionTime}</p>
      </div>
    )
  }
}

const Password = ({ HashType, DataType }) => {
  for (let i = 0; i < data.length; i++) {
    //console.log(i.passwordNumber)
    if (data[i].passwordNumber == DataType) {
      if (HashType == "SHA") {
        return (
          <div>
            <ul>
              <li>{data[i].hashValueSHA}</li>
              <li>{data[i].executionTimeSHA}</li>
            </ul>
          </div>
        )
      }
      else {
        return (
          <div>
            <ul>
              <li>{data[i].hashValueKeccak}</li>
              <li>{data[i].executionTimeKeccak}</li>
            </ul>
          </div>
        )
      }
    }
  }
}


const DataDisplay = ({ DataType, HashType }) => {
  if (DataType == "LargeDataset") {
    return <LargeDataset HashType={HashType} />
  }
  else {
    return <Password HashType={HashType} DataType={DataType} />
  }
}

export default DataDisplay