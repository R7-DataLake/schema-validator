import S from 'fluent-json-schema'

const schema = S.object()
  .id('https://r7.moph.go.th/platform/dataset/std/lab')
  .description('JSON Schema สำหรับตรวจสอบแฟ้ม LAB')
  .prop('HOSPCODE', S.string().minLength(5).maxLength(10).required())
  .prop('HN', S.string().maxLength(50).required())
  .prop('SEQ', S.string().maxLength(15).required())
  .prop('LABTEST', S.string().maxLength(30).required())
  .prop('LABRESULT', S.string().maxLength(100).required())
  .prop('D_UPDATE', S.string().maxLength(14).minLength(14).required())

export default schema