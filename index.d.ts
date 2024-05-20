declare module 'tpns_rn_plugin' {
  export default class XgPush {
    /*************************************************************************************************
/***                                 TPNS注册反注册和debug接口                                   ***/
    /***********************************************************************************************/

    /// 集群域名配置（非广州集群需要在startXg之前调用此函数）
    /// @param domainName String类型
    /// 香港：tpns.hk.tencent.com
    /// 新加坡：tpns.sgp.tencent.com
    /// 上海：tpns.sh.tencent.com
    static configureClusterDomainName(domainName: string): void;

    /// debug模式默认为关闭状态
    /// @param enableDebug bool类型
    static setEnableDebug(enableDebug: boolean): void;

    /// 注册推送服务
    /// iOS需传appId和appKey均为String类型
    /// android不需要传参数
    static startXg(appId?: string, appKey?: string): void;

    /// 注销推送服务
    static stopXg(): void;

    /*************************************************************************************************
/***                                   账号相关接口1.0.8+                                       ***/
    /***********************************************************************************************/

    /// 设置账号
    /// account 账号标识，String类型
    /// accountType 账号类型枚举，AccountType类型
    static setAccount(account: string, accountType): void;

    /// 删除指定账号
    /// account 账号标识，String类型
    /// accountType 账号类型枚举，AccountType类型
    static deleteAccount(account: string, accountType): void;

    /// 删除所有账号
    static cleanAccounts(): void;

    /*************************************************************************************************
/***                                   标签相关接口1.0.8+                                       ***/
    /***********************************************************************************************/

    /// 追加标签
    /// tags类型为字符串数组(标签字符串不允许有空格或者是tab字符) 字符串数组[tagStr]
    static addTags(tags: string[]): void;

    /// 覆盖标签(清除所有标签再追加)
    /// tags类型为字符串数组(标签字符串不允许有空格或者是tab字符) 字符串数组[tagStr]
    static setTags(tags: string[]): void;
    /// 删除指定标签
    /// tags类型为字符串数组(标签字符串不允许有空格或者是tab字符) 字符串数组[tagStr]
    static deleteTags(tags: string[]): void;

    /// 清除所有标签
    static cleanTags(): void;

    /*************************************************************************************************
/***                     以下账号和标签接口1.0.8+ 废弃，新版本请使用以上新接口                        ***/
    /***********************************************************************************************/

    /// 绑定账号或标签
    /// @param identify String类型
    /// @param bindType XGBindType枚举值
    static bindWithIdentifier(identify, bindType): void;

    /// 解绑账号或标签
    /// @param identify String类型
    /// @param bindType XGBindType枚举值
    static unbindWithIdentifier(identify, bindType): void;

    /// 批量绑定账号或标签(追加操作，对于单账号体系请使用updateBindIdentifiers)
    /// @param bindType XGBindType枚举值
    /// ios 对于账号操作. identifys类型为dic数组[{'account':identifyStr, 'accountType':0}]
    /// ios 对于标签操作，identifys类型为字符串数组(标签字符串不允许有空格或者是tab字符) [identifyStr]
    /// android List类型为字符串数组(标签字符串不允许有空格或者是tab字符) [identifyStr]
    static bindWithIdentifiers(identifys, bindType): void;
    /// 批量解绑账号或标签
    /// @param bindType XGBindType枚举值
    /// ios 对于账号操作. identifys类型为dic数组[{'account':identifyStr, 'accountType':0}]
    /// ios 对于标签操作，identifys类型为字符串数组(标签字符串不允许有空格或者是tab字符) [identifyStr]
    /// android List类型为字符串数组(标签字符串不允许有空格或者是tab字符) [identifyStr]
    static unbindWithIdentifiers(identifys, bindType): void;
    /// 清除全部账号或标签
    /// @param bindType XGBindType枚举值
    static clearAllIdentifier(bindType): void;
    /// 更新账号和标签
    /// @param bindType XGBindType枚举值
    /// ios 对于账号操作. identifys类型为dic数组[{'account':identifyStr, 'accountType':0}]
    /// ios 对于标签操作，identifys类型为字符串数组(标签字符串不允许有空格或者是tab字符) [identifyStr]
    /// android List类型为字符串数组(标签字符串不允许有空格或者是tab字符) [identifyStr]
    static updateBindIdentifiers(identifys, bindType): void;

    /*************************************************************************************************
/***                     以上账号和标签接口1.0.8+ 废弃，请使用新接口                                ***/
    /***********************************************************************************************/

    /*************************************************************************************************
 /***                                 通知栏通知管理                                             ***/
    /***********************************************************************************************/

    /// 清除当前通知栏的全部通知
    /// iOS平台系统版本iOS10及以上, android平台无限制
    static cancelAllNotification(): void;
    /*************************************************************************************************
/***                                 角标管理仅iOS                                              ***/
    /***********************************************************************************************/

    /// 同步角标到TPNS服务器，仅iOS
    /// @param badgeSum int类型
    static setBadge(badgeSum): void;

    /// 设置应用角标，仅iOS
    /// @param badgeSum int类型
    static setAppBadge(badgeSum): void;

    /*************************************************************************************************
/***                                 TPNS Callback                                            ***/
    /***********************************************************************************************/

    /// DeviceToken回调
    static addOnRegisteredDeviceTokenListener(callback: (e) => void): void;

    /// 注册推送服务成功回调
    static addOnRegisteredDoneListener(callback: (e) => void): void;
    /// 注销推送服务回调
    static addUnRegisteredListener(callback: (e) => void): void;
    /// 收到通知消息回调
    static addOnReceiveNotificationResponseListener(
      callback: (e) => void
    ): void;

    /// 收到透传、静默消息回调
    static addOnReceiveMessageListener(callback: (e) => void): void;

    /// 设置角标回调仅iOS
    static addXgPushDidSetBadgeListener(callback: (e) => void): void;

    /// 绑定账号和标签回调
    static addXgPushDidBindWithIdentifierListener(callback: (e) => void): void;

    /// 解绑账号和标签回调
    static addXgPushDidUnbindWithIdentifierListener(
      callback: (e) => void
    ): void;

    /// 更新账号和标签回调
    /// 仅IOS有
    static addXgPushDidUpdatedBindedIdentifierListener(
      callback: (e) => void
    ): void;

    /// 清除所有账号和标签回调
    static addXgPushDidClearAllIdentifiersListener(callback: (e) => void): void;

    /// 通知点击回调
    static addXgPushClickActionListener(callback: (e) => void): void;

    /// 移除事件
    static removeListener(callback: (e) => void): void;
  }
}

declare module 'tpns_rn_plugin/AndroidApi' {
  export default class AndroidApi {
    /**
     * 初始化推送服务
     *
     * */
    static regPush(): void;
    /**
     *开启debug模式
     *enable 是否为debug模式 默认不是
     *
     **/
    static setEnableDebug(enable: boolean): void;

    /**
     * 设置心跳间隔
     *
     * @param heartbeat 心跳间隔
     */
    static setHeartbeatIntervalMs(heartbeat: number): void;

    /**
     * 反注册
     * <p>
     * 当用户已退出或 App 被关闭，不再需要接收推送时，可以取消注册 App，即反注册。
     * （一旦设备反注册，直到这个设备重新注册成功期间内，下发的消息该设备都无法收到）
     */
    static stopXg(): void;
    /**
     * 设置标签,单个标签
     *
     * @param tagName  标签
     */
    static setXgTag(tagName: string): void;

    /**
     * 设置多tag call传参为List<String>tag的集合
     * 一次设置多个标签，会覆盖这个设备之前设置的标签。
     *
     * @param tags 标签集合
     */
    static setXgTags(tags: string[]): void;

    /**
     * 添加多个标签  call传参为List<String>tag的集合 每个 tag 不能超过40字节（超过会抛弃）不能包含空格（含有空格会删除空格)
     * 最多设置1000个 tag，超过部分会抛弃
     * 一次设置多个标签，会覆盖这个设备之前设置的标签。
     * <p>
     * <p>
     * 如果新增的标签的格式为 "test:2 level:2"，则会删除这个设备的全部历史标签，再新增 test:2 和 level。
     * 如果新增的标签有部分不带:号，如 "test:2 level"，则会删除这个设备的全部历史标签，再新增 test:2 和 level 标签。
     * <p>
     * <p>
     * 新增的 tags 中，:号为后台关键字，请根据具体的业务场景使用。
     * 此接口调用的时候需要间隔一段时间（建议大于5s），否则可能造成更新失败。
     *
     * @param tags 标签集合
     * @param operateName 操作名称
     */
    static addXgTags(tags: string[]): void;

    /**
     * 删除指定标签 call传参为TagName需要删除的标签名称
     *
     * @param tagName  标签名称
     */
    static deleteXgTag(tagName: string): void;

    /**
     * 删除多个标签  call传参为List<String>tag的集合 每个标签是一个 String。限制：
     * 每个 tag 不能超过40字节（超过会抛弃），不能包含空格（含有空格会删除空格）。最多设置1000个tag，超过部分会抛弃。
     *
     * @param tags 标签集合
     */
    static deleteXgTags(tags: string[]): void;
    /**
     * 清除所有标签
     *
     */
    static cleanXgTags(): void;

    /**
     * 获取Xg的token
     * App 第一次注册会产生 Token，之后一直存在手机上，不管以后注销注册操作，该 Token 一直存在，
     * 当 App 完全卸载重装了 Token 会发生变化。不同 App 之间的 Token 不一样。
     */
    static getToken(callback: (token: string) => void): void;
    /**
     * 绑定账号注册
     * 推荐有账号体系的App使用（此接口会覆盖设备之前绑定过的账号，仅当前注册的账号生效）
     *
     * @param account  账号
     * @param accountType 账号类型，见 index.js AccountType
     */
    static bindAccountWithAccountType(account: string, accountType: number): void;
    /**
     * 添加账号
     * 推荐有账号体系的App使用（此接口保留之前的账号，只做增加操作，一个token下最多只能有10个账号超过限制会自动顶掉之前绑定的账号)
     *
     * @param account  账号
     * @param accountType 账号类型，见 index.js AccountType
     */
    static appendAccountWithAccountType(account: string, accountType: number): void;
    /**
     * 解除指定账号绑定
     * 账号解绑只是解除 Token 与 App 账号的关联，若使用全量/标签/Token 推送仍然能收到通知/消息。
     *
     * @param account  账号
     * @param accountType 账号类型，见 index.js AccountType
     */
    static delAccountWithAccountType(account: string, accountType: number): void;
    /**
     * 绑定账号注册
     * 推荐有账号体系的App使用（此接口会覆盖设备之前绑定过的账号，仅当前注册的账号生效）
     *
     * @param account  账号
     */
    static bindAccount(account: string): void;
    /**
     * 添加账号
     * 推荐有账号体系的App使用（此接口保留之前的账号，只做增加操作，一个token下最多只能有10个账号超过限制会自动顶掉之前绑定的账号)
     *
     * @param account  账号
     */
    static appendAccount(account: string): void;
    /**
     * 解除指定账号绑定
     * 账号解绑只是解除 Token 与 App 账号的关联，若使用全量/标签/Token 推送仍然能收到通知/消息。
     *
     * @param account  账号
     */
    static delAccount(account: string): void;
    /**
     * 清除全部账号
     */
    static delAllAccount(): void;

    /**
     * 开启其他推送  XGPushManager.registerPush 前，开启第三方推
     *
     * @param enable 是否开启第三方推送
     */
    static enableOtherPush(enable: boolean): void;
    /**
     * 设置小米平台的APP_KEY
     * 推荐有账号体系的App使用（此接口保留之前的账号，只做增加操作，一个token下最多只能有10个账号超过限制会自动顶掉之前绑定的账号)
     *
     * @param key appKey
     */
    static setMiPushAppKey(appKey: string): void;

    /**
     * 设置小米平台的APP_ID
     */
    static setMiPushAppId(appId: string): void;

    /**
     * 设置魅族平台的的APP_KEy
     *
     * @param appKey appKey
     */
    static setMzPushAppKey(appKey: string): void;
    /**
     * 设置魅族平台的的APP_ID
     *
     * @param appId appID
     */
    static setMzPushAppId(appId: string): void;

    /**
     * 在调用腾讯移动推送 XGPushManager.registerPush前，调用以下代码：
     * 在应用首次启动时弹出通知栏权限请求窗口，应用安装周期内，提示弹窗仅展示一次。
     *需 TPNS-OPPO 依赖包版本在 1.1.5.1 及以上支持，系统 ColorOS 5.0 以上有效。
     */
    static enableOppoNotification(enable: boolean): void;

    /**
     * 设置OPPO的key
     */
    static setOppoPushAppKey(appKey: string): void;

    /**
     * 设置OPPO的appID
     */
    static setOppoPushAppId(appId: string): void;
    //DeviceToken回调
    static addOnRegisteredDeviceTokenListener(callback: (token: string) => void): void;

    //注册推送服务成功回调
    static addOnRegisteredDoneListener(callback: () => void): void;

    //注销推送服务回调
    static addUnRegisteredListener(callback: () => void): void;

    //收到通知消息回调
    static addOnReceiveNotificationResponseListener(callback: (notification: any) => void): void;

    //收到透传、静默消息回调
    static addOnReceiveMessageListener(callback: (message: any) => void): void;

    //设置角标回调仅iOS
    static addXgPushDidSetBadgeListener(callback: (badge: number) => void): void;
    //绑定账号和标签回调
    static addXgPushDidBindWithIdentifierListener(callback: (result: any) => void): void;

    //解绑账号和标签回调
    static addXgPushDidUnbindWithIdentifierListener(callback: (result: any) => void): void;

    //更新账号和标签回调
    static addXgPushDidUpdatedBindedIdentifierListener(callback: (result: any) => void): void;

    //清除所有账号和标签回调
    static addXgPushDidClearAllIdentifiersListener(callback: () => void): void;

    //通知点击回调
    static addXgPushClickActionListener(callback: (action: any) => void): void;

    //移除事件
    static removeListener(callback: () => void): void;

    static cancelAllNotification(): void;
    // 直接设置应用角标，当前支持华为、OPPO、vivo，其中 OPPO 需另外向厂商申请角标展示权限
    static setBadgeNum(badgeNum: number): void;

    // 设置手机应用角标归0，建议在应用打开时将角标清0，当前支持华为、OPPO、vivo，其中 OPPO 需另外向厂商申请角标展示权限
    static resetBadgeNum(): void;
  }
}
