import S from 'fluent-json-schema'

const schema = S.object()
  .id('https://r7.moph.go.th/platform/dataset/std/appoint')
  .description('JSON Schema สำหรับตรวจสอบแฟ้ม APPOINT')
  .prop('HOSPCODE', S.string().minLength(5).maxLength(10).required())
  .prop('HN', S.string().maxLength(50).required())
  .prop('AN', S.string().maxLength(15))
  .prop('SEQ', S.string().maxLength(15).required())
  .prop('APPOINT_DATE', S.string().maxLength(8).minLength(8).required())
  .prop('APPOINT_TIME', S.string().maxLength(4).required())
  .prop('CLINIC', S.string().maxLength(100).required())
  .prop('REMARK', S.string().maxLength(1024))
  .prop('D_UPDATE', S.string().maxLength(14).minLength(14).required())

export default schema