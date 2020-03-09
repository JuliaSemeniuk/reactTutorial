import React from 'react'

import NullableButton from './1_NullableButton/NullableButton'
import TernaryNullableButton from './2_TernaryNullableButton/TernaryNullableButton'
import BlueButtonByDefault from './3_DefaultValues/BlueButtonByDefault'

export default class ReactMain extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <span>Third button will not exist in DOM after render</span>
                    <NullableButton isHidden={false} buttonNumber={1} />
                    <NullableButton isHidden={false} buttonNumber={2} />
                    <NullableButton isHidden={true} buttonNumber={3} />
                    <NullableButton isHidden={false} buttonNumber={4} />
                </div>
                <div>
                    <span>
                        Second button will not exist in DOM after render
                    </span>
                    <TernaryNullableButton isHidden={false} buttonNumber={1} />
                    <TernaryNullableButton isHidden={true} buttonNumber={2} />
                    <TernaryNullableButton isHidden={false} buttonNumber={3} />
                    <TernaryNullableButton isHidden={false} buttonNumber={4} />
                </div>
                <div>
                    <span>
                        If flag is not provided it will get "false" value
                    </span>
                    <BlueButtonByDefault />
                    <BlueButtonByDefault color={'red'} />
                    <BlueButtonByDefault color={'aquamarine'} />
                    <BlueButtonByDefault />
                </div>
            </div>
        )
    }
}
