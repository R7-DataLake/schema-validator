import S from 'fluent-json-schema'

const schema = S
  .object()
  .id('https://r7.moph.go.th/platform/dataset/std/person')
  .description('JSON Schema สำหรับตรวจสอบแฟ้ม PERSON')
  .prop('HOSPCODE', S.string().minLength(5).maxLength(10).required())
  .prop('HN', S.string().maxLength(50).required())
  .prop('CID', S.string().maxLength(13).minLength(13).required())
  .prop('TITLE', S.string().maxLength(30).required())
  .prop('FNAME', S.string().maxLength(100).required())
  .prop('LNAME', S.string().maxLength(100).required())
  .prop('BIRTH', S.string().maxLength(8).minLength(8).required())
  .prop('SEX', S.enum(['1', '2']).required())
  .prop('MARRIAGE', S.string().default('1'))
  .prop('OCCUPATION', S.string().default('00').required())
  .prop('NATION', S.string().required())
  .prop('IDTYPE', S.enum(['1', '2', '3', '4', '5']).default('1'))
  .prop('CHANGWAT', S.string().maxLength(2).minLength(2).default('00').required())
  .prop('AMPHUR', S.string().maxLength(2).minLength(2).default('00').required())
  .prop('TAMBOL', S.string().maxLength(2).default('00').required())
  .prop('MOO', S.string().maxLength(3).default('0').required())
  .prop('TYPEAREA', S.enum(['0', '1', '2', '3', '4', '5']).default('0').required())
  .prop('D_UPDATE', S.string().maxLength(14).minLength(14).required())

export default schema