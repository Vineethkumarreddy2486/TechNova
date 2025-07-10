import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export function nameValidator(control : AbstractControl):ValidationErrors | null{
    const value = control.value
    // test check if a pattern exists in a given string.
    if (value && !/^[A-Za-z ]+$/.test(value)){
        return {invalidName:'name should not contain special characters except space'}
    }
    return null;
}

// export function strongPassword(control : AbstractControl):ValidationErrors | null{
//     const value =control.get('password')?.value
    
// }

export function passwordMatch(control : AbstractControl):ValidationErrors | null{
    const group= control as FormGroup
    const pass=group.get('password')?.value
    const cnfrm=group.get('cnfrmPassword')?.value
    return pass === cnfrm ? null : {passwordsMismatched : true}
}


// export function phoneValidator(control : AbstractControl): ValidationErrors | null{
//     const value = control.get('phone')
//     if (!/^\d{10}$/.test(value)){
//         return {invalidPhone:'phone number should contain exactly 10 digits'}
//     }
//     return null
// }




