import S from 'fluent-json-schema'

const schema = S.object()
  .id('https://r7.moph.go.th/platform/dataset/std/opop')
  .description('JSON Schema สำหรับตรวจสอบแฟ้ม OPOP')
  .prop('HOSPCODE', S.string().minLength(5).maxLength(10).required())
  .prop('HN', S.string().maxLength(50).required())
  .prop('SEQ', S.string().maxLength(15).required())
  .prop('DATEOP', S.string().maxLength(8).minLength(8).required())
  .prop('OPER', S.string().maxLength(7).minLength(3).required())
  .prop('SERVPRICE', S.number().maximum(999999).default(0).required())
  .prop('PROVIDER', S.string().maxLength(6).required())
  .prop('D_UPDATE', S.string().maxLength(14).minLength(14).required())

export default schema