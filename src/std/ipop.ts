import S from 'fluent-json-schema'

const schema = S.object()
  .id('https://r7.moph.go.th/platform/dataset/std/ipop')
  .description('JSON Schema สำหรับตรวจสอบแฟ้ม IPOP')
  .prop('HOSPCODE', S.string().minLength(5).maxLength(10).required())
  .prop('HN', S.string().maxLength(50).required())
  .prop('AN', S.string().maxLength(15).required())
  .prop('OPER', S.string().maxLength(7).minLength(3).required())
  .prop('OPTYPE', S.enum(['1', '2', '3']).required())
  .prop('PROVIDER', S.string().maxLength(6).required())
  .prop('DATEIN', S.string().maxLength(8).minLength(8).required())
  .prop('TIMEIN', S.string().maxLength(6).minLength(6).required())
  .prop('DATEOUT', S.string().maxLength(8).minLength(8).required())
  .prop('TIMEOUT', S.string().maxLength(6).minLength(6).required())
  .prop('D_UPDATE', S.string().maxLength(14).minLength(14).required())

export default schema