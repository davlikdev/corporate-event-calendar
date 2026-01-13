import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = "Please input your username!") => ({
        required: true,
        message,
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            if (value.isSameOrAfter(moment(), "day")) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
}