
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsCpp.js
 */

#include <react/renderer/components/RNCSlider/Props.h>
#include <react/renderer/components/image/conversions.h>
#include <react/renderer/core/PropsParserContext.h>
#include <react/renderer/core/propsConversions.h>

namespace facebook::react {

RNCSliderProps::RNCSliderProps(
    const PropsParserContext &context,
    const RNCSliderProps &sourceProps,
    const RawProps &rawProps): ViewProps(context, sourceProps, rawProps),

    accessibilityUnits(convertRawProp(context, rawProps, "accessibilityUnits", sourceProps.accessibilityUnits, {})),
    accessibilityIncrements(convertRawProp(context, rawProps, "accessibilityIncrements", sourceProps.accessibilityIncrements, {})),
    disabled(convertRawProp(context, rawProps, "disabled", sourceProps.disabled, {false})),
    inverted(convertRawProp(context, rawProps, "inverted", sourceProps.inverted, {false})),
    vertical(convertRawProp(context, rawProps, "vertical", sourceProps.vertical, {false})),
    tapToSeek(convertRawProp(context, rawProps, "tapToSeek", sourceProps.tapToSeek, {false})),
    maximumTrackImage(convertRawProp(context, rawProps, "maximumTrackImage", sourceProps.maximumTrackImage, {})),
    maximumTrackTintColor(convertRawProp(context, rawProps, "maximumTrackTintColor", sourceProps.maximumTrackTintColor, {})),
    maximumValue(convertRawProp(context, rawProps, "maximumValue", sourceProps.maximumValue, {0.0})),
    minimumTrackImage(convertRawProp(context, rawProps, "minimumTrackImage", sourceProps.minimumTrackImage, {})),
    minimumTrackTintColor(convertRawProp(context, rawProps, "minimumTrackTintColor", sourceProps.minimumTrackTintColor, {})),
    minimumValue(convertRawProp(context, rawProps, "minimumValue", sourceProps.minimumValue, {0.0})),
    step(convertRawProp(context, rawProps, "step", sourceProps.step, {0.0})),
    testID(convertRawProp(context, rawProps, "testID", sourceProps.testID, {})),
    thumbImage(convertRawProp(context, rawProps, "thumbImage", sourceProps.thumbImage, {})),
    thumbTintColor(convertRawProp(context, rawProps, "thumbTintColor", sourceProps.thumbTintColor, {})),
    trackImage(convertRawProp(context, rawProps, "trackImage", sourceProps.trackImage, {})),
    value(convertRawProp(context, rawProps, "value", sourceProps.value, {0.0})),
    lowerLimit(convertRawProp(context, rawProps, "lowerLimit", sourceProps.lowerLimit, {0.0})),
    upperLimit(convertRawProp(context, rawProps, "upperLimit", sourceProps.upperLimit, {0.0}))
      {}

} // namespace facebook::react
