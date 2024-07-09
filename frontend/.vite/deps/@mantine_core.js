import {
  require_react_dom
} from "./chunk-QPG7G3M7.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React16 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React16.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error2(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values2, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error2("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error2('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error2("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error2("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps180 = type.defaultProps;
              for (propName in defaultProps180) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps180[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error2('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error2("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error2("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys2 = Object.keys(fragment.props);
            for (var i = 0; i < keys2.length; i++) {
              var key = keys2[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error2("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error2("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error2("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error2("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys2 = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys2.length > 0 ? "{key: someKey, " + keys2.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys2.length > 0 ? "{" + keys2.join(": ..., ") + ": ...}" : "{}";
                  error2('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx252 = jsxWithValidationDynamic;
        var jsxs71 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx252;
        exports.jsxs = jsxs71;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React9 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React5 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React3 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React4 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React4.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React5.forwardRef(function(props, parentRef) {
  var ref = React5.useRef(null);
  var _a = React5.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container2 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React5.createElement(
    React5.Fragment,
    null,
    enabled && React5.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React5.cloneElement(React5.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React5.createElement(Container2, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React8 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React7 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React6 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React6.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React7.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React7.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React7.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React8.useRef([]);
  var touchStartRef = React8.useRef([0, 0]);
  var activeAxis = React8.useRef();
  var id = React8.useState(idCounter++)[0];
  var Style2 = React8.useState(styleSingleton)[0];
  var lastProps = React8.useRef(props);
  React8.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React8.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React8.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React8.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React8.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React8.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React8.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React8.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React8.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React8.createElement(
    React8.Fragment,
    null,
    inert ? React8.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React8.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React9.forwardRef(function(props, ref) {
  return React9.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@mantine/core/esm/core/utils/keys/keys.mjs
function keys(object) {
  return Object.keys(object);
}

// node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = { ...target };
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}

// node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

// node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs
function getTransformedScaledValue(value) {
  var _a;
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return (_a = value.match(/^calc\((.*?)\)$/)) == null ? void 0 : _a[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}

// node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
function scaleRem(remValue) {
  if (remValue === "0rem") {
    return "0rem";
  }
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  function converter(value) {
    if (value === 0 || value === "0") {
      return `0${units}`;
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value === "") {
        return value;
      }
      if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
        return value;
      }
      if (value.includes(",")) {
        return value.split(",").map((val) => converter(val)).join(",");
      }
      if (value.includes(" ")) {
        return value.split(" ").map((val) => converter(val)).join(" ");
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  }
  return converter;
}
var rem = createConverter("rem", { shouldScale: true });
var em = createConverter("em");

// node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

// node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
      return true;
    }
    return /[0-9]/.test(value.trim().replace("-", "")[0]);
  }
  return false;
}

// node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs
var import_react4 = __toESM(require_react(), 1);
function isElement(value) {
  if (Array.isArray(value) || value === null) {
    return false;
  }
  if (typeof value === "object") {
    if (value.type === import_react4.Fragment) {
      return false;
    }
    return true;
  }
  return false;
}

// node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
function createSafeContext(errorMessage) {
  const Context = (0, import_react5.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react5.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => (0, import_jsx_runtime.jsx)(Context.Provider, { value, children });
  return [Provider, useSafeContext];
}

// node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react6.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react6.useContext)(Context);
  const Provider = ({ children, value }) => (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
  return [Provider, useOptionalContext];
}

// node_modules/@mantine/core/esm/core/utils/get-safe-id/get-safe-id.mjs
function getSafeId(uid, errorMessage) {
  return (value) => {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
    return `${uid}-${value}`;
  };
}

// node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector))
    ;
  return _element;
}

// node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs
function getPreviousIndex(current, elements, loop) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function getNextIndex(current, elements, loop) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function onSameLevel(target, sibling, parentSelector) {
  return findElementAncestor(target, parentSelector) === findElementAncestor(sibling, parentSelector);
}
function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = "rtl",
  orientation
}) {
  return (event) => {
    var _a;
    onKeyDown == null ? void 0 : onKeyDown(event);
    const elements = Array.from(
      ((_a = findElementAncestor(event.currentTarget, parentSelector)) == null ? void 0 : _a.querySelectorAll(
        siblingSelector
      )) || []
    ).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));
    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
    const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
    switch (event.key) {
      case "ArrowRight": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }
        break;
      }
      case "ArrowLeft": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }
        break;
      }
      case "ArrowUp": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }
        break;
      }
      case "ArrowDown": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }
        break;
      }
      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }
      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}

// node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
var elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}

// node_modules/@mantine/core/esm/core/utils/noop/noop.mjs
var noop = () => {
};

// node_modules/@mantine/core/esm/core/utils/close-on-escape/close-on-escape.mjs
function closeOnEscape(callback, options = { active: true }) {
  if (typeof callback !== "function" || !options.active) {
    return options.onKeyDown || noop;
  }
  return (event) => {
    var _a;
    if (event.key === "Escape") {
      callback(event);
      (_a = options.onTrigger) == null ? void 0 : _a.call(options);
    }
  };
}

// node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
function getSize(size4, prefix = "size", convertToRem = true) {
  if (size4 === void 0) {
    return void 0;
  }
  return isNumberLike(size4) ? convertToRem ? rem(size4) : size4 : `var(--${prefix}-${size4})`;
}
function getSpacing(size4) {
  return getSize(size4, "mantine-spacing");
}
function getRadius(size4) {
  if (size4 === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size4, "mantine-radius");
}
function getFontSize(size4) {
  return getSize(size4, "mantine-font-size");
}
function getLineHeight(size4) {
  return getSize(size4, "mantine-line-height", false);
}
function getShadow(size4) {
  if (!size4) {
    return void 0;
  }
  return getSize(size4, "mantine-shadow", false);
}

// node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs
function createEventHandler(parentEventHandler, eventHandler) {
  return (event) => {
    parentEventHandler == null ? void 0 : parentEventHandler(event);
    eventHandler == null ? void 0 : eventHandler(event);
  };
}

// node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs
function getBreakpointValue(breakpoint, theme) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint]);
  }
  return px(breakpoint);
}

// node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs
function getSortedBreakpoints(breakpoints, theme) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue(breakpoint, theme)
  }));
  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}

// node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}

// node_modules/@mantine/core/esm/core/utils/get-context-item-index/get-context-item-index.mjs
function getContextItemIndex(elementSelector, parentSelector, node) {
  var _a;
  if (!node) {
    return null;
  }
  return Array.from(
    ((_a = findElementAncestor(node, parentSelector)) == null ? void 0 : _a.querySelectorAll(elementSelector)) || []
  ).findIndex((element) => element === node);
}

// node_modules/@mantine/core/esm/core/utils/use-hovered/use-hovered.mjs
var import_react7 = __toESM(require_react(), 1);
function useHovered() {
  const [hovered, setHovered] = (0, import_react7.useState)(-1);
  const resetHovered = () => setHovered(-1);
  return [hovered, { setHovered, resetHovered }];
}

// node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs
function clamp(value, min2, max2) {
  if (min2 === void 0 && max2 === void 0) {
    return value;
  }
  if (min2 !== void 0 && max2 === void 0) {
    return Math.max(value, min2);
  }
  if (min2 === void 0 && max2 !== void 0) {
    return Math.min(value, max2);
  }
  return Math.min(Math.max(value, min2), max2);
}

// node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs
function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}

// node_modules/@mantine/hooks/esm/use-callback-ref/use-callback-ref.mjs
var import_react8 = __toESM(require_react(), 1);
function useCallbackRef2(callback) {
  const callbackRef = (0, import_react8.useRef)(callback);
  (0, import_react8.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react8.useMemo)(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

// node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs
var import_react9 = __toESM(require_react(), 1);
function useDebouncedCallback(callback, delay) {
  const handleCallback = useCallbackRef2(callback);
  const debounceTimerRef = (0, import_react9.useRef)(0);
  (0, import_react9.useEffect)(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return (0, import_react9.useCallback)(
    (...args) => {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(() => handleCallback(...args), delay);
    },
    [handleCallback, delay]
  );
}

// node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.mjs
var import_react10 = __toESM(require_react(), 1);
var DEFAULT_EVENTS = ["mousedown", "touchstart"];
function useClickOutside(handler, events, nodes) {
  const ref = (0, import_react10.useRef)();
  (0, import_react10.useEffect)(() => {
    const listener = (event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = (target == null ? void 0 : target.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler, nodes]);
  return ref;
}

// node_modules/@mantine/hooks/esm/use-clipboard/use-clipboard.mjs
var import_react11 = __toESM(require_react(), 1);
function useClipboard({ timeout = 2e3 } = {}) {
  const [error2, setError] = (0, import_react11.useState)(null);
  const [copied, setCopied] = (0, import_react11.useState)(false);
  const [copyTimeout, setCopyTimeout] = (0, import_react11.useState)(null);
  const handleCopyResult = (value) => {
    window.clearTimeout(copyTimeout);
    setCopyTimeout(window.setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };
  const copy = (valueToCopy) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
    } else {
      setError(new Error("useClipboard: navigator.clipboard is not supported"));
    }
  };
  const reset = () => {
    setCopied(false);
    setError(null);
    window.clearTimeout(copyTimeout);
  };
  return { copy, reset, error: error2, copied };
}

// node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs
var import_react12 = __toESM(require_react(), 1);
function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches2, setMatches] = (0, import_react12.useState)(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = (0, import_react12.useRef)();
  (0, import_react12.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches2;
}

// node_modules/@mantine/hooks/esm/use-color-scheme/use-color-scheme.mjs
function useColorScheme(initialValue, options) {
  return useMediaQuery("(prefers-color-scheme: dark)", initialValue === "dark", options) ? "dark" : "light";
}

// node_modules/@mantine/hooks/esm/use-counter/use-counter.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-debounced-state/use-debounced-state.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-debounced-value/use-debounced-value.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var import_react16 = __toESM(require_react(), 1);
var useIsomorphicEffect = typeof document !== "undefined" ? import_react16.useLayoutEffect : import_react16.useEffect;

// node_modules/@mantine/hooks/esm/use-document-visibility/use-document-visibility.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs
var import_react18 = __toESM(require_react(), 1);
function useDidUpdate(fn, dependencies) {
  const mounted = (0, import_react18.useRef)(false);
  (0, import_react18.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0, import_react18.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}

// node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs
function useFocusReturn({ opened, shouldReturnFocus = true }) {
  const lastActiveElement = (0, import_react19.useRef)();
  const returnFocus = () => {
    var _a;
    if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
      (_a = lastActiveElement.current) == null ? void 0 : _a.focus({ preventScroll: true });
    }
  };
  useDidUpdate(() => {
    let timeout = -1;
    const clearFocusTimeout = (event) => {
      if (event.key === "Tab") {
        window.clearTimeout(timeout);
      }
    };
    document.addEventListener("keydown", clearFocusTimeout);
    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("keydown", clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);
  return returnFocus;
}

// node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-focus-trap/create-aria-hider.mjs
function createAriaHider(containerNode, selector = "body > :not(script)") {
  const id = randomId();
  const rootNodes = Array.from(
    document.querySelectorAll(selector)
  ).map((node) => {
    var _a;
    if (((_a = node == null ? void 0 : node.shadowRoot) == null ? void 0 : _a.contains(containerNode)) || node.contains(containerNode)) {
      return void 0;
    }
    const ariaHidden = node.getAttribute("aria-hidden");
    const prevAriaHidden = node.getAttribute("data-hidden");
    const prevFocusId = node.getAttribute("data-focus-id");
    node.setAttribute("data-focus-id", id);
    if (ariaHidden === null || ariaHidden === "false") {
      node.setAttribute("aria-hidden", "true");
    } else if (!prevAriaHidden && !prevFocusId) {
      node.setAttribute("data-hidden", ariaHidden);
    }
    return {
      node,
      ariaHidden: prevAriaHidden || null
    };
  });
  return () => {
    rootNodes.forEach((item) => {
      if (!item || id !== item.node.getAttribute("data-focus-id")) {
        return;
      }
      if (item.ariaHidden === null) {
        item.node.removeAttribute("aria-hidden");
      } else {
        item.node.setAttribute("aria-hidden", item.ariaHidden);
      }
      item.node.removeAttribute("data-focus-id");
      item.node.removeAttribute("data-hidden");
    });
  };
}

// node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.mjs
var TABBABLE_NODES = /input|select|textarea|button|object/;
var FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
  if (false) {
    return false;
  }
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }
    if (hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  let tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) {
    tabIndex = void 0;
  }
  return parseInt(tabIndex, 10);
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res = (
    // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
  );
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}

// node_modules/@mantine/hooks/esm/use-focus-trap/scope-tab.mjs
function scopeTab(node, event) {
  const tabbable3 = findTabbableDescendants(node);
  if (!tabbable3.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable3[event.shiftKey ? 0 : tabbable3.length - 1];
  const root = node.getRootNode();
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  const activeElement2 = root.activeElement;
  const activeElementIsRadio = activeElement2.tagName === "INPUT" && activeElement2.getAttribute("type") === "radio";
  if (activeElementIsRadio) {
    const activeRadioGroup = tabbable3.filter(
      (element) => element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement2.getAttribute("name")
    );
    leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
  }
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable3[event.shiftKey ? tabbable3.length - 1 : 0];
  if (target) {
    target.focus();
  }
}

// node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs
function useFocusTrap(active = true) {
  const ref = (0, import_react20.useRef)();
  const restoreAria = (0, import_react20.useRef)(null);
  const focusNode = (node) => {
    let focusElement = node.querySelector("[data-autofocus]");
    if (!focusElement) {
      const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
      focusElement = children.find(tabbable) || children.find(focusable) || null;
      if (!focusElement && focusable(node))
        focusElement = node;
    }
    if (focusElement) {
      focusElement.focus({ preventScroll: true });
    } else if (true) {
      console.warn(
        "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
        node
      );
    }
  };
  const setRef = (0, import_react20.useCallback)(
    (node) => {
      if (!active) {
        return;
      }
      if (node === null) {
        if (restoreAria.current) {
          restoreAria.current();
          restoreAria.current = null;
        }
        return;
      }
      restoreAria.current = createAriaHider(node);
      if (ref.current === node) {
        return;
      }
      if (node) {
        setTimeout(() => {
          if (node.getRootNode()) {
            focusNode(node);
          } else if (true) {
            console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", node);
          }
        });
        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [active]
  );
  (0, import_react20.useEffect)(() => {
    if (!active) {
      return void 0;
    }
    ref.current && setTimeout(() => focusNode(ref.current));
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreAria.current) {
        restoreAria.current();
      }
    };
  }, [active]);
  return setRef;
}

// node_modules/@mantine/hooks/esm/use-force-update/use-force-update.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-id/use-id.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs
var import_react22 = __toESM(require_react(), 1);
var __useId = import_react22.default["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}

// node_modules/@mantine/hooks/esm/use-id/use-id.mjs
function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = (0, import_react23.useState)(reactId);
  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}

// node_modules/@mantine/hooks/esm/use-idle/use-idle.mjs
var import_react24 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-interval/use-interval.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-list-state/use-list-state.mjs
var import_react26 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-local-storage/create-storage.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs
var import_react27 = __toESM(require_react(), 1);
function useWindowEvent(type, listener, options) {
  (0, import_react27.useEffect)(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}

// node_modules/@mantine/hooks/esm/use-local-storage/create-storage.mjs
function deserializeJSON(value) {
  try {
    return value && JSON.parse(value);
  } catch {
    return value;
  }
}
function createStorageHandler(type) {
  const getItem = (key) => {
    try {
      return window[type].getItem(key);
    } catch (error2) {
      console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked");
      return null;
    }
  };
  const setItem = (key, value) => {
    try {
      window[type].setItem(key, value);
    } catch (error2) {
      console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked");
    }
  };
  const removeItem = (key) => {
    try {
      window[type].removeItem(key);
    } catch (error2) {
      console.warn(
        "use-local-storage: Failed to remove value from storage, localStorage is blocked"
      );
    }
  };
  return { getItem, setItem, removeItem };
}
function readValue(type) {
  const { getItem } = createStorageHandler(type);
  return function read({
    key,
    defaultValue,
    deserialize = deserializeJSON
  }) {
    let storageBlockedOrSkipped;
    try {
      storageBlockedOrSkipped = typeof window === "undefined" || !(type in window) || window[type] === null;
    } catch (_e) {
      storageBlockedOrSkipped = true;
    }
    if (storageBlockedOrSkipped) {
      return defaultValue;
    }
    const storageValue = getItem(key);
    return storageValue !== null ? deserialize(storageValue) : defaultValue;
  };
}

// node_modules/@mantine/hooks/esm/use-local-storage/use-local-storage.mjs
var readLocalStorageValue = readValue("localStorage");

// node_modules/@mantine/hooks/esm/use-session-storage/use-session-storage.mjs
var readSessionStorageValue = readValue("sessionStorage");

// node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs
var import_react29 = __toESM(require_react(), 1);
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs2(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef2(ref, node));
  };
}
function useMergedRef(...refs) {
  return (0, import_react29.useCallback)(mergeRefs2(...refs), refs);
}

// node_modules/@mantine/hooks/esm/use-mouse/use-mouse.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-move/use-move.mjs
var import_react31 = __toESM(require_react(), 1);
function clampUseMovePosition(position) {
  return {
    x: clamp(position.x, 0, 1),
    y: clamp(position.y, 0, 1)
  };
}
function useMove(onChange, handlers, dir = "ltr") {
  const ref = (0, import_react31.useRef)(null);
  const mounted = (0, import_react31.useRef)(false);
  const isSliding = (0, import_react31.useRef)(false);
  const frame = (0, import_react31.useRef)(0);
  const [active, setActive] = (0, import_react31.useState)(false);
  (0, import_react31.useEffect)(() => {
    mounted.current = true;
  }, []);
  (0, import_react31.useEffect)(() => {
    var _a, _b;
    const onScrub = ({ x, y }) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          ref.current.style.userSelect = "none";
          const rect = ref.current.getBoundingClientRect();
          if (rect.width && rect.height) {
            const _x = clamp((x - rect.left) / rect.width, 0, 1);
            onChange({
              x: dir === "ltr" ? _x : 1 - _x,
              y: clamp((y - rect.top) / rect.height, 0, 1)
            });
          }
        }
      });
    };
    const bindEvents = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", stopScrubbing);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", stopScrubbing);
    };
    const unbindEvents = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", stopScrubbing);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", stopScrubbing);
    };
    const startScrubbing = () => {
      if (!isSliding.current && mounted.current) {
        isSliding.current = true;
        typeof (handlers == null ? void 0 : handlers.onScrubStart) === "function" && handlers.onScrubStart();
        setActive(true);
        bindEvents();
      }
    };
    const stopScrubbing = () => {
      if (isSliding.current && mounted.current) {
        isSliding.current = false;
        setActive(false);
        unbindEvents();
        setTimeout(() => {
          typeof (handlers == null ? void 0 : handlers.onScrubEnd) === "function" && handlers.onScrubEnd();
        }, 0);
      }
    };
    const onMouseDown = (event) => {
      startScrubbing();
      event.preventDefault();
      onMouseMove(event);
    };
    const onMouseMove = (event) => onScrub({ x: event.clientX, y: event.clientY });
    const onTouchStart = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      startScrubbing();
      onTouchMove(event);
    };
    const onTouchMove = (event) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      onScrub({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
    };
    (_a = ref.current) == null ? void 0 : _a.addEventListener("mousedown", onMouseDown);
    (_b = ref.current) == null ? void 0 : _b.addEventListener("touchstart", onTouchStart, { passive: false });
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousedown", onMouseDown);
        ref.current.removeEventListener("touchstart", onTouchStart);
      }
    };
  }, [dir, onChange]);
  return { ref, active };
}

// node_modules/@mantine/hooks/esm/use-pagination/use-pagination.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs
var import_react32 = __toESM(require_react(), 1);
function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0, import_react32.useState)(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val, ...payload) => {
    setUncontrolledValue(val);
    onChange == null ? void 0 : onChange(val, ...payload);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}

// node_modules/@mantine/hooks/esm/use-pagination/use-pagination.mjs
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index5) => index5 + start);
}
var DOTS = "dots";
function usePagination({
  total,
  siblings = 1,
  boundaries = 1,
  page,
  initialPage = 1,
  onChange
}) {
  const _total = Math.max(Math.trunc(total), 0);
  const [activePage, setActivePage] = useUncontrolled({
    value: page,
    onChange,
    defaultValue: initialPage,
    finalValue: initialPage
  });
  const setPage = (pageNumber) => {
    if (pageNumber <= 0) {
      setActivePage(1);
    } else if (pageNumber > _total) {
      setActivePage(_total);
    } else {
      setActivePage(pageNumber);
    }
  };
  const next = () => setPage(activePage + 1);
  const previous = () => setPage(activePage - 1);
  const first = () => setPage(1);
  const last = () => setPage(_total);
  const paginationRange = (0, import_react33.useMemo)(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= _total) {
      return range(1, _total);
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, _total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [...range(1, leftItemCount), DOTS, ...range(_total - (boundaries - 1), _total)];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [...range(1, boundaries), DOTS, ...range(_total - rightItemCount, _total)];
    }
    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(_total - boundaries + 1, _total)
    ];
  }, [_total, siblings, activePage]);
  return {
    range: paginationRange,
    active: activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}

// node_modules/@mantine/hooks/esm/use-queue/use-queue.mjs
var import_react34 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-page-leave/use-page-leave.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs
function useReducedMotion(initialValue, options) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
}

// node_modules/@mantine/hooks/esm/use-scroll-into-view/use-scroll-into-view.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-resize-observer/use-resize-observer.mjs
var import_react37 = __toESM(require_react(), 1);
var defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useResizeObserver(options) {
  const frameID = (0, import_react37.useRef)(0);
  const ref = (0, import_react37.useRef)(null);
  const [rect, setRect] = (0, import_react37.useState)(defaultState);
  const observer = (0, import_react37.useMemo)(
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frameID.current);
        frameID.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    }) : null,
    []
  );
  (0, import_react37.useEffect)(() => {
    if (ref.current) {
      observer == null ? void 0 : observer.observe(ref.current, options);
    }
    return () => {
      observer == null ? void 0 : observer.disconnect();
      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);
  return [ref, rect];
}
function useElementSize(options) {
  const [ref, { width, height }] = useResizeObserver(options);
  return { ref, width, height };
}

// node_modules/@mantine/hooks/esm/use-shallow-effect/use-shallow-effect.mjs
var import_react38 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-toggle/use-toggle.mjs
var import_react39 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-viewport-size/use-viewport-size.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-window-scroll/use-window-scroll.mjs
var import_react41 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-intersection/use-intersection.mjs
var import_react42 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-hash/use-hash.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-hotkeys/use-hotkeys.mjs
var import_react44 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-fullscreen/use-fullscreen.mjs
var import_react45 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-logger/use-logger.mjs
var import_react46 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-hover/use-hover.mjs
var import_react47 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-validated-state/use-validated-state.mjs
var import_react48 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-os/use-os.mjs
var import_react49 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-set-state/use-set-state.mjs
var import_react50 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-input-state/use-input-state.mjs
var import_react51 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-event-listener/use-event-listener.mjs
var import_react52 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs
var import_react53 = __toESM(require_react(), 1);
function useDisclosure(initialState = false, callbacks) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = (0, import_react53.useState)(initialState);
  const open = (0, import_react53.useCallback)(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen == null ? void 0 : onOpen();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);
  const close = (0, import_react53.useCallback)(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose == null ? void 0 : onClose();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);
  const toggle = (0, import_react53.useCallback)(() => {
    opened ? close() : open();
  }, [close, open, opened]);
  return [opened, { open, close, toggle }];
}

// node_modules/@mantine/hooks/esm/use-focus-within/use-focus-within.mjs
var import_react54 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-network/use-network.mjs
var import_react55 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-timeout/use-timeout.mjs
var import_react56 = __toESM(require_react(), 1);
function useTimeout(callback, delay, options = { autoInvoke: false }) {
  const timeoutRef = (0, import_react56.useRef)(null);
  const start = (0, import_react56.useCallback)(
    (...callbackParams) => {
      if (!timeoutRef.current) {
        timeoutRef.current = window.setTimeout(() => {
          callback(callbackParams);
          timeoutRef.current = null;
        }, delay);
      }
    },
    [delay]
  );
  const clear = (0, import_react56.useCallback)(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  (0, import_react56.useEffect)(() => {
    if (options.autoInvoke) {
      start();
    }
    return clear;
  }, [clear, start]);
  return { start, clear };
}

// node_modules/@mantine/hooks/esm/use-text-selection/use-text-selection.mjs
var import_react57 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-previous/use-previous.mjs
var import_react58 = __toESM(require_react(), 1);
function usePrevious(value) {
  const ref = (0, import_react58.useRef)();
  (0, import_react58.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@mantine/hooks/esm/use-favicon/use-favicon.mjs
var import_react59 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-headroom/use-headroom.mjs
var import_react60 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-eye-dropper/use-eye-dropper.mjs
var import_react61 = __toESM(require_react(), 1);
function isOpera() {
  return navigator.userAgent.includes("OPR");
}
function useEyeDropper() {
  const [supported, setSupported] = (0, import_react61.useState)(false);
  useIsomorphicEffect(() => {
    setSupported(typeof window !== "undefined" && !isOpera() && "EyeDropper" in window);
  }, []);
  const open = (0, import_react61.useCallback)(
    (options = {}) => {
      if (supported) {
        const eyeDropper = new window.EyeDropper();
        return eyeDropper.open(options);
      }
      return Promise.resolve(void 0);
    },
    [supported]
  );
  return { supported, open };
}

// node_modules/@mantine/hooks/esm/use-in-viewport/use-in-viewport.mjs
var import_react62 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-mutation-observer/use-mutation-observer.mjs
var import_react63 = __toESM(require_react(), 1);
function useMutationObserver(callback, options, target) {
  const observer = (0, import_react63.useRef)();
  const ref = (0, import_react63.useRef)(null);
  (0, import_react63.useEffect)(() => {
    const targetElement = typeof target === "function" ? target() : target;
    if (targetElement || ref.current) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(targetElement || ref.current, options);
    }
    return () => {
      var _a;
      (_a = observer.current) == null ? void 0 : _a.disconnect();
    };
  }, [callback, options]);
  return ref;
}

// node_modules/@mantine/hooks/esm/use-mounted/use-mounted.mjs
var import_react64 = __toESM(require_react(), 1);
function useMounted() {
  const [mounted, setMounted] = (0, import_react64.useState)(false);
  (0, import_react64.useEffect)(() => setMounted(true), []);
  return mounted;
}

// node_modules/@mantine/hooks/esm/use-state-history/use-state-history.mjs
var import_react65 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-map/use-map.mjs
var import_react66 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-set/use-set.mjs
var import_react67 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-throttled-callback/use-throttled-callback.mjs
var import_react68 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-throttled-state/use-throttled-state.mjs
var import_react69 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-throttled-value/use-throttled-value.mjs
var import_react70 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-is-first-render/use-is-first-render.mjs
var import_react71 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-orientation/use-orientation.mjs
var import_react72 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-fetch/use-fetch.mjs
var import_react73 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/utils/create-use-external-events/create-use-external-events.mjs
function dispatchEvent(type, detail) {
  window.dispatchEvent(new CustomEvent(type, { detail }));
}
function createUseExternalEvents(prefix) {
  function _useExternalEvents(events) {
    const handlers = Object.keys(events).reduce((acc, eventKey) => {
      acc[`${prefix}:${eventKey}`] = (event) => events[eventKey](event.detail);
      return acc;
    }, {});
    useIsomorphicEffect(() => {
      Object.keys(handlers).forEach((eventKey) => {
        window.removeEventListener(eventKey, handlers[eventKey]);
        window.addEventListener(eventKey, handlers[eventKey]);
      });
      return () => Object.keys(handlers).forEach((eventKey) => {
        window.removeEventListener(eventKey, handlers[eventKey]);
      });
    }, [handlers]);
  }
  function createEvent(event) {
    return (...payload) => dispatchEvent(`${prefix}:${String(event)}`, payload[0]);
  }
  return [_useExternalEvents, createEvent];
}

// node_modules/@mantine/core/esm/core/utils/get-env/get-env.mjs
function getEnv() {
  if (typeof process !== "undefined" && process.env && "development") {
    return "development";
  }
  return "development";
}

// node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
function createVarsResolver(resolver) {
  return resolver;
}

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
var EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = clsx_default(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return { ...acc, ...style(theme, props, stylesCtx) };
    }
    return { ...acc, ...style };
  }, {});
}

// node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs
var import_react87 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var import_react74 = __toESM(require_react(), 1);
var MantineContext = (0, import_react74.createContext)(null);
function useMantineContext() {
  const ctx = (0, import_react74.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
  return useMantineContext().headless;
}
function useMantineSxTransform() {
  var _a;
  return (_a = useMantineContext().stylesTransform) == null ? void 0 : _a.sx;
}
function useMantineStylesTransform() {
  var _a;
  return (_a = useMantineContext().stylesTransform) == null ? void 0 : _a.styles;
}

// node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var import_react76 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
var import_react75 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  if (hexString.length === 8) {
    const alpha2 = parseInt(hexString.slice(6, 8), 16) / 255;
    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha2
    };
  }
  const parsed = parseInt(hexString, 16);
  const r2 = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r: r2,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r2, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: r2, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches2 = hslaString.match(hslaRegex);
  if (!matches2) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches2[1], 10);
  const s = parseInt(matches2[2], 10) / 100;
  const l = parseInt(matches2[3], 10) / 100;
  const a = matches2[5] ? parseFloat(matches2[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r2;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r2 = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r2 = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r2 = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r2 = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r2 = x;
    g = 0;
    b = chroma;
  } else {
    r2 = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r2 + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs
function darken(color, alpha2) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, black ${alpha2 * 100}%)`;
  }
  const { r: r2, g, b, a } = toRgba(color);
  const f = 1 - alpha2;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r2)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs
function gammaCorrect(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
  if (color.startsWith("oklch(")) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }
  const { r: r2, g, b } = toRgba(color);
  const sR = r2 / 255;
  const sG = g / 255;
  const sB = b / 255;
  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  if (color.startsWith("var(")) {
    return false;
  }
  return luminance(color) > luminanceThreshold;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs
function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }
  if (color === "bright") {
    return {
      color,
      value: colorScheme === "dark" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  }
  if (color === "dimmed") {
    return {
      color,
      value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        color === "white" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")];
    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: isLightColor(colorValue, theme.luminanceThreshold),
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    isLight: isLightColor(color, theme.luminanceThreshold),
    shade: colorShade,
    variable: void 0
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
function getGradient(gradient, theme) {
  const merged = {
    from: (gradient == null ? void 0 : gradient.from) || theme.defaultGradient.from,
    to: (gradient == null ? void 0 : gradient.to) || theme.defaultGradient.to,
    deg: (gradient == null ? void 0 : gradient.deg) || theme.defaultGradient.deg || 0
  };
  const fromColor = getThemeColor(merged.from, theme);
  const toColor = getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
function rgba(color, alpha2) {
  if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  if (color.startsWith("var(")) {
    const mixPercentage = (1 - alpha2) * 100;
    return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
  }
  if (color.startsWith("oklch")) {
    if (color.includes("/")) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
    }
    return color.replace(")", ` / ${alpha2})`);
  }
  const { r: r2, g, b } = toRgba(color);
  return `rgba(${r2}, ${g}, ${b}, ${alpha2})`;
}
var alpha = rgba;

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
var defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  autoContrast
}) => {
  const parsed = parseThemeColor({ color, theme });
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (variant === "filled") {
    const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: textColor,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${rem(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};

// node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs
var DEFAULT_COLORS = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

// node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
var DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(
      15
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(
      25
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(
      23
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(
      28
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`
  },
  other: {},
  components: {}
};

// node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs
function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs
function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error2) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error2
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react79 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react78 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs
var import_react77 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color";
var INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  var _a;
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !((_a = themeOverride.headings) == null ? void 0 : _a.fontFamily)) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
var MantineThemeContext = (0, import_react78.createContext)(null);
var useSafeMantineTheme = () => (0, import_react78.useContext)(MantineThemeContext) || DEFAULT_THEME;
function useMantineTheme() {
  const ctx = (0, import_react78.useContext)(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = (0, import_react78.useMemo)(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return (0, import_jsx_runtime6.jsx)(MantineThemeContext.Provider, { value: mergedTheme, children });
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

// node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
function MantineClasses() {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const classes85 = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
    const pxValue = px(theme.breakpoints[breakpoint]);
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : em(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : em(pxValue);
    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return (0, import_jsx_runtime7.jsx)(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: classes85 }
    }
  );
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}

// node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

// node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs
function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const light = cssVariablesObjectToString(input.light);
  const darkForced = dark ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="dark"])`, dark) : wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const lightForced = light ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="light"])`, light) : wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
var import_react83 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
var import_react82 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs
function getContrastColor({ color, theme, autoContrast }) {
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (!_autoContrast) {
    return "var(--mantine-color-white)";
  }
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme, colorScheme) {
  return getContrastColor({
    color: theme.colors[theme.primaryColor][getPrimaryShade(theme, colorScheme)],
    theme,
    autoContrast: null
  });
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs
var import_react80 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true
}) {
  if (!theme.colors[color]) {
    return {};
  }
  if (colorScheme === "light") {
    const primaryShade2 = getPrimaryShade(theme, "light");
    const dynamicVariables2 = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade2 === 9 ? 8 : primaryShade2 + 1})`,
      [`--mantine-color-${name}-light`]: alpha(theme.colors[color][primaryShade2], 0.1),
      [`--mantine-color-${name}-light-hover`]: alpha(theme.colors[color][primaryShade2], 0.12),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline-hover`]: alpha(theme.colors[color][primaryShade2], 0.05)
    };
    if (!withColorValues) {
      return dynamicVariables2;
    }
    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables2
    };
  }
  const primaryShade = getPrimaryShade(theme, "dark");
  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade === 9 ? 8 : primaryShade + 1})`,
    [`--mantine-color-${name}-light`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${name}-light-hover`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${name}-outline-hover`]: alpha(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    )
  };
  if (!withColorValues) {
    return dynamicVariables;
  }
  return {
    [`--mantine-color-${name}-0`]: theme.colors[color][0],
    [`--mantine-color-${name}-1`]: theme.colors[color][1],
    [`--mantine-color-${name}-2`]: theme.colors[color][2],
    [`--mantine-color-${name}-3`]: theme.colors[color][3],
    [`--mantine-color-${name}-4`]: theme.colors[color][4],
    [`--mantine-color-${name}-5`]: theme.colors[color][5],
    [`--mantine-color-${name}-6`]: theme.colors[color][6],
    [`--mantine-color-${name}-7`]: theme.colors[color][7],
    [`--mantine-color-${name}-8`]: theme.colors[color][8],
    [`--mantine-color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs
var import_react81 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/colors-tuple/colors-tuple.mjs
function colorsTuple(input) {
  if (Array.isArray(input)) {
    return input;
  }
  return Array(10).fill(input);
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs
function virtualColor(input) {
  const result = colorsTuple(
    Array.from({ length: 10 }).map((_, i) => `var(--mantine-color-${input.name}-${i})`)
  );
  Object.defineProperty(result, "mantine-virtual-color", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true
  });
  Object.defineProperty(result, "dark", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.dark
  });
  Object.defineProperty(result, "light", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.light
  });
  Object.defineProperty(result, "name", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.name
  });
  return result;
}
function isVirtualColor(value) {
  return !!value && typeof value === "object" && "mantine-virtual-color" in value;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
function assignSizeVariables(variables, sizes, name) {
  keys(sizes).forEach(
    (size4) => Object.assign(variables, { [`--mantine-${name}-${size4}`]: sizes[size4] })
  );
}
var defaultCssVariablesResolver = (theme) => {
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-heading-text-wrap": theme.headings.textWrap,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  theme.colors[theme.primaryColor].forEach((_, index5) => {
    result.variables[`--mantine-primary-color-${index5}`] = `var(--mantine-color-${theme.primaryColor}-${index5})`;
  });
  keys(theme.colors).forEach((color) => {
    const value = theme.colors[color];
    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: "light",
          withColorValues: true
        })
      );
      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: "dark",
          withColorValues: true
        })
      );
      return;
    }
    value.forEach((shade, index5) => {
      result.variables[`--mantine-color-${color}-${index5}`] = shade;
    });
    Object.assign(
      result.light,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "light",
        withColorValues: false
      })
    );
    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "dark",
        withColorValues: false
      })
    );
  });
  const headings4 = theme.headings.sizes;
  keys(headings4).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings4[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings4[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings4[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator == null ? void 0 : generator(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs
var import_react84 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({
  cssVariablesSelector,
  deduplicateCssVariables
}) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return (0, import_jsx_runtime13.jsx)(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

// node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
var import_react86 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme")) ;
    else {
      originalError(...args);
    }
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs
var import_react85 = __toESM(require_react(), 1);
function setColorSchemeAttribute(colorScheme, getRootElement) {
  var _a;
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = (0, import_react85.useRef)();
  const [value, setValue] = (0, import_react85.useState)(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = (0, import_react85.useCallback)(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = (0, import_react85.useCallback)(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  (0, import_react85.useEffect)(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  (0, import_react85.useEffect)(() => {
    var _a;
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    if (forceColorScheme === void 0) {
      setColorSchemeAttribute(value, getRootElement);
    }
    media.current = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    (_a = media.current) == null ? void 0 : _a.addEventListener("change", listener);
    return () => {
      var _a2;
      return (_a2 = media.current) == null ? void 0 : _a2.removeEventListener("change", listener);
    };
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs
function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  useIsomorphicEffect(() => {
    var _a;
    if (respectReducedMotion) {
      (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withStaticClasses = true,
  withGlobalClasses = true,
  deduplicateCssVariables = true,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
  stylesTransform
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: (theme == null ? void 0 : theme.respectReducedMotion) || false,
    getRootElement
  });
  return (0, import_jsx_runtime14.jsx)(
    MantineContext.Provider,
    {
      value: {
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
        withStaticClasses,
        stylesTransform
      },
      children: (0, import_jsx_runtime14.jsxs)(MantineThemeProvider, { theme, children: [
        withCssVariables && (0, import_jsx_runtime14.jsx)(
          MantineCssVariables,
          {
            cssVariablesSelector,
            deduplicateCssVariables
          }
        ),
        withGlobalClasses && (0, import_jsx_runtime14.jsx)(MantineClasses, {}),
        children
      ] })
    }
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";
function HeadlessMantineProvider({ children, theme }) {
  return (0, import_jsx_runtime14.jsx)(
    MantineContext.Provider,
    {
      value: {
        colorScheme: "auto",
        setColorScheme: () => {
        },
        clearColorScheme: () => {
        },
        getRootElement: () => document.documentElement,
        classNamesPrefix: "mantine",
        cssVariablesSelector: ":root",
        withStaticClasses: false,
        headless: true
      },
      children: (0, import_jsx_runtime14.jsx)(MantineThemeProvider, { theme, children })
    }
  );
}
HeadlessMantineProvider.displayName = "@mantine/core/HeadlessMantineProvider";

// node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs
function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme = useMantineTheme();
  return {
    resolvedClassNames: resolveClassNames({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: resolveStyles({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs
var FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return clsx_default(
    (options == null ? void 0 : options.focusable) && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    (options == null ? void 0 : options.active) && !unstyled && theme.activeClassName
  );
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
var import_react90 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs
function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options == null ? void 0 : options.classNames,
    props: (options == null ? void 0 : options.props) || props,
    stylesCtx
  })[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs
function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs
function getSelectorClassName({ selector, classes: classes85, unstyled }) {
  return unstyled ? void 0 : classes85[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass
}) {
  if (withStaticClass === false) {
    return [];
  }
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs
function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => {
      var _a, _b;
      return (_b = resolveClassNames({
        theme,
        classNames: (_a = theme.components[n]) == null ? void 0 : _a.classNames,
        props,
        stylesCtx
      })) == null ? void 0 : _b[selector];
    }
  );
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs
function getVariantClassName({
  options,
  classes: classes85,
  selector,
  unstyled
}) {
  return (options == null ? void 0 : options.variant) && !unstyled ? classes85[`${selector}--${options.variant}`] : void 0;
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs
function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes: classes85,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx,
  withStaticClasses,
  headless,
  transformedStyles
}) {
  return clsx_default(
    getGlobalClassNames({ theme, options, unstyled: unstyled || headless }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes: classes85, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames: transformedStyles, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes: classes85, unstyled: unstyled || headless }),
    withStaticClasses && !headless && getStaticClassNames({
      themeName,
      classNamesPrefix,
      selector,
      withStaticClass: options == null ? void 0 : options.withStaticClass
    }),
    options == null ? void 0 : options.className
  );
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs
function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => {
      var _a;
      return resolveStyles({
        theme,
        styles: (_a = theme.components[n]) == null ? void 0 : _a.styles,
        props,
        stylesCtx
      })[selector];
    }
  ).reduce((acc, val) => ({ ...acc, ...val }), {});
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs
function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs
var import_react88 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...filterProps(current[key]) };
      });
    }
    return acc;
  }, {});
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs
function resolveVars({
  vars,
  varsResolver: varsResolver86,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
  headless
}) {
  var _a;
  return (_a = mergeVars([
    headless ? {} : varsResolver86 == null ? void 0 : varsResolver86(theme, props, stylesCtx),
    ...themeName.map((name) => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = theme.components) == null ? void 0 : _a2[name]) == null ? void 0 : _b.vars) == null ? void 0 : _c.call(_b, theme, props, stylesCtx);
    }),
    vars == null ? void 0 : vars(theme, props, stylesCtx)
  ])) == null ? void 0 : _a[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs
function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver: varsResolver86,
  headless,
  withStylesTransform
}) {
  return {
    ...!withStylesTransform && getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
    ...!withStylesTransform && resolveStyles({ theme, styles, props, stylesCtx })[selector],
    ...!withStylesTransform && resolveStyles({ theme, styles: options == null ? void 0 : options.styles, props: (options == null ? void 0 : options.props) || props, stylesCtx })[selector],
    ...resolveVars({ theme, props, stylesCtx, vars, varsResolver: varsResolver86, selector, themeName, headless }),
    ...rootSelector === selector ? resolveStyle({ style, theme }) : null,
    ...resolveStyle({ style: options == null ? void 0 : options.style, theme })
  };
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs
var import_react89 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function useStylesTransform({ props, stylesCtx, themeName }) {
  var _a;
  const theme = useMantineTheme();
  const stylesTransform = (_a = useMantineStylesTransform()) == null ? void 0 : _a();
  const getTransformedStyles = (styles) => {
    if (!stylesTransform) {
      return [];
    }
    const transformedStyles = styles.map(
      (style) => stylesTransform(style, { props, theme, ctx: stylesCtx })
    );
    return [
      ...transformedStyles,
      ...themeName.map(
        (n) => {
          var _a2;
          return stylesTransform((_a2 = theme.components[n]) == null ? void 0 : _a2.styles, { props, theme, ctx: stylesCtx });
        }
      )
    ].filter(Boolean);
  };
  return {
    getTransformedStyles,
    withStylesTransform: !!stylesTransform
  };
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
function useStyles({
  name,
  classes: classes85,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver: varsResolver86
}) {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const withStaticClasses = useMantineWithStaticClasses();
  const headless = useMantineIsHeadless();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  const { withStylesTransform, getTransformedStyles } = useStylesTransform({
    props,
    stylesCtx,
    themeName
  });
  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes: classes85,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
      withStaticClasses,
      headless,
      transformedStyles: getTransformedStyles([options == null ? void 0 : options.styles, styles])
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver: varsResolver86,
      headless,
      withStylesTransform
    })
  });
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/lighten/lighten.mjs
function lighten(color, alpha2) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, white ${alpha2 * 100}%)`;
  }
  const { r: r2, g, b, a } = toRgba(color);
  const light = (input) => Math.round(input + (255 - input) * alpha2);
  return `rgba(${light(r2)}, ${light(g)}, ${light(b)}, ${a})`;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs
function getAutoContrastValue(autoContrast, theme) {
  return typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-mantine-color-scheme.mjs
var import_react91 = __toESM(require_react(), 1);
function disableTransition(nonce) {
  const style = document.createElement("style");
  style.setAttribute("data-mantine-styles", "inline");
  style.innerHTML = "*, *::before, *::after {transition: none !important;}";
  style.setAttribute("data-mantine-disable-transition", "true");
  nonce && style.setAttribute("nonce", nonce);
  document.head.appendChild(style);
  const clear = () => document.querySelectorAll("[data-mantine-disable-transition]").forEach((element) => element.remove());
  return clear;
}
function useMantineColorScheme({ keepTransitions } = {}) {
  const clearStylesRef = (0, import_react91.useRef)();
  const timeoutRef = (0, import_react91.useRef)();
  const ctx = (0, import_react91.useContext)(MantineContext);
  const nonce = useMantineStyleNonce();
  const nonceValue = (0, import_react91.useRef)(nonce == null ? void 0 : nonce());
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  const setColorScheme = (value) => {
    ctx.setColorScheme(value);
    clearStylesRef.current = keepTransitions ? () => {
    } : disableTransition(nonceValue.current);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
    }, 10);
  };
  const clearColorScheme = () => {
    ctx.clearColorScheme();
    clearStylesRef.current = keepTransitions ? () => {
    } : disableTransition(nonceValue.current);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
    }, 10);
  };
  const osColorScheme = useColorScheme("light", { getInitialValueInEffect: false });
  const computedColorScheme = ctx.colorScheme === "auto" ? osColorScheme : ctx.colorScheme;
  const toggleColorScheme = (0, import_react91.useCallback)(
    () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
    [setColorScheme, computedColorScheme]
  );
  (0, import_react91.useEffect)(
    () => () => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
      window.clearTimeout(timeoutRef.current);
    },
    []
  );
  return {
    colorScheme: ctx.colorScheme,
    setColorScheme,
    clearColorScheme,
    toggleColorScheme
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-computed-color-scheme.mjs
function useComputedColorScheme(defaultValue, options = { getInitialValueInEffect: true }) {
  const osColorScheme = useColorScheme(defaultValue, options);
  const { colorScheme } = useMantineColorScheme();
  return colorScheme === "auto" ? osColorScheme : colorScheme;
}

// node_modules/@mantine/core/esm/core/MantineProvider/ColorSchemeScript/ColorSchemeScript.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var getScript = ({
  defaultColorScheme,
  localStorageKey,
  forceColorScheme
}) => forceColorScheme ? `document.documentElement.setAttribute("data-mantine-color-scheme", '${forceColorScheme}');` : `try {
  var _colorScheme = window.localStorage.getItem("${localStorageKey}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${defaultColorScheme}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;
function ColorSchemeScript({
  defaultColorScheme = "light",
  localStorageKey = "mantine-color-scheme-value",
  forceColorScheme,
  ...others
}) {
  const _defaultColorScheme = ["light", "dark", "auto"].includes(defaultColorScheme) ? defaultColorScheme : "light";
  return (0, import_jsx_runtime19.jsx)(
    "script",
    {
      ...others,
      "data-mantine-script": true,
      dangerouslySetInnerHTML: {
        __html: getScript({
          defaultColorScheme: _defaultColorScheme,
          localStorageKey,
          forceColorScheme
        })
      }
    }
  );
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var import_react92 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function useProps(component, defaultProps180, props) {
  var _a;
  const theme = useMantineTheme();
  const contextPropsPayload = (_a = theme.components[component]) == null ? void 0 : _a.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return { ...defaultProps180, ...contextProps, ...filterProps(props) };
}

// node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs
function createTheme(theme) {
  return theme;
}

// node_modules/@mantine/core/esm/core/MantineProvider/merge-theme-overrides/merge-theme-overrides.mjs
var import_react93 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function mergeThemeOverrides(...overrides) {
  return overrides.reduce((acc, override) => deepMerge(acc, override), {});
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-matches/use-matches.mjs
var BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];
function getFirstMatchingValue(value, biggestMatch) {
  if (!biggestMatch) {
    return value.base;
  }
  let index5 = BREAKPOINTS.indexOf(biggestMatch);
  while (index5 >= 0) {
    if (BREAKPOINTS[index5] in value) {
      return value[BREAKPOINTS[index5]];
    }
    index5 -= 1;
  }
  return value.base;
}
function getFirstMatchingBreakpoint(matches2) {
  return matches2.findLastIndex((v) => v);
}
function useMatches(payload, options) {
  const theme = useMantineTheme();
  const xsMatches = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`, false, options);
  const smMatches = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`, false, options);
  const mdMatches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`, false, options);
  const lgMatches = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`, false, options);
  const xlMatches = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`, false, options);
  const breakpoints = [xsMatches, smMatches, mdMatches, lgMatches, xlMatches];
  const firstMatchingBreakpointIndex = getFirstMatchingBreakpoint(breakpoints);
  return getFirstMatchingValue(payload, BREAKPOINTS[firstMatchingBreakpointIndex]);
}

// node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react95 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs
var import_react94 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

// node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs
function stylesToString({ selector, styles, media, container }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  const containerStyles = !Array.isArray(container) ? [] : container.map(
    (item) => `@container ${item.query}{${selector}{${cssObjectToString(item.styles)}}}`
  );
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}

// node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
function InlineStyles(props) {
  const nonce = useMantineStyleNonce();
  return (0, import_jsx_runtime23.jsx)(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: stylesToString(props) }
    }
  );
}

// node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var import_react96 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function extractStyleProps(others) {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx,
    ...rest
  } = others;
  const styleProps = filterProps({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx
  });
  return { styleProps, rest };
}

// node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs
var STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};

// node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
var import_react102 = __toESM(require_react(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs
var import_react98 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs
var import_react97 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function colorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }
  return colorResolver(color, theme);
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs
function borderResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const [size4, style, ...colorTuple] = value.split(" ").filter((val) => val.trim() !== "");
    let result = `${rem(size4)}`;
    style && (result += ` ${style}`);
    colorTuple.length > 0 && (result += ` ${colorResolver(colorTuple.join(" "), theme)}`);
    return result.trim();
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs
var values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
  if (typeof fontFamily === "string" && fontFamily in values) {
    return values[fontFamily];
  }
  return fontFamily;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs
var import_react99 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "string" && headings.includes(value)) {
    return `var(--mantine-${value}-font-size)`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs
function identityResolver(value) {
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs
var headings2 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }
  if (typeof value === "string" && headings2.includes(value)) {
    return `var(--mantine-${value}-line-height)`;
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs
var import_react100 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs
var import_react101 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return rem(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs
var resolvers = {
  color: colorResolver,
  textColor: textColorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver,
  border: borderResolver
};

// node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media,
  ...props
}) {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return { ...props, media: sortedMedia };
}

// node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue2(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return keys(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue2(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return sortMediaQueries(
    keys(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
          return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue2(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = {
              ...acc.media[bp],
              [property]: resolvers[propertyData.type](
                getBreakpointValue2(styleProps[styleProp], breakpoint),
                theme
              )
            };
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}

// node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs
var import_react103 = __toESM(require_react(), 1);
function useRandomClassName() {
  const id = (0, import_react103.useId)().replace(/:/g, "");
  return `__m__-${id}`;
}

// node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs
function getStyleObject(style, theme) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}

// node_modules/@mantine/core/esm/core/Box/Box.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_react104 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs
function createPolymorphicComponent(component) {
  return component;
}

// node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => ({ ...acc, ...getBoxMod(value) }),
      {}
    );
  }
  return getMod(mod);
}

// node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs
function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}

// node_modules/@mantine/core/esm/core/Box/Box.mjs
var _Box = (0, import_react104.forwardRef)(
  ({
    component,
    style,
    __vars,
    className,
    variant,
    mod,
    size: size4,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    renderRoot,
    __size,
    ...others
  }, ref) => {
    var _a;
    const theme = useMantineTheme();
    const Element2 = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const useSxTransform = useMantineSxTransform();
    const transformedSx = (_a = useSxTransform == null ? void 0 : useSxTransform()) == null ? void 0 : _a(styleProps.sx);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    const props = {
      ref,
      style: getBoxStyle({
        theme,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles
      }),
      className: clsx_default(className, transformedSx, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        "mantine-light-hidden": lightHidden,
        "mantine-dark-hidden": darkHidden,
        [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`mantine-visible-from-${visibleFrom}`]: visibleFrom
      }),
      "data-variant": variant,
      "data-size": isNumberLike(size4) ? void 0 : size4 || void 0,
      size: __size,
      ...getBoxMod(mod),
      ...rest
    };
    return (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
      parsedStyleProps.hasResponsiveStyles && (0, import_jsx_runtime31.jsx)(
        InlineStyles,
        {
          selector: `.${responsiveClassName}`,
          styles: parsedStyleProps.styles,
          media: parsedStyleProps.media
        }
      ),
      typeof renderRoot === "function" ? renderRoot(props) : (0, import_jsx_runtime31.jsx)(Element2, { ...props })
    ] });
  }
);
_Box.displayName = "@mantine/core/Box";
var Box = createPolymorphicComponent(_Box);

// node_modules/@mantine/core/esm/core/factory/factory.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react105 = __toESM(require_react(), 1);
function identity(value) {
  return value;
}
function factory(ui) {
  const Component = (0, import_react105.forwardRef)(ui);
  Component.extend = identity;
  Component.withProps = (fixedProps) => {
    const Extended = (0, import_react105.forwardRef)((props, ref) => (0, import_jsx_runtime32.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  return Component;
}

// node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react106 = __toESM(require_react(), 1);
function polymorphicFactory(ui) {
  const Component = (0, import_react106.forwardRef)(ui);
  Component.withProps = (fixedProps) => {
    const Extended = (0, import_react106.forwardRef)((props, ref) => (0, import_jsx_runtime33.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  Component.extend = identity;
  return Component;
}

// node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var import_react107 = __toESM(require_react(), 1);
var DirectionContext = (0, import_react107.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return (0, import_react107.useContext)(DirectionContext);
}
function DirectionProvider({
  children,
  initialDirection = "ltr",
  detectDirection = true
}) {
  const [dir, setDir] = (0, import_react107.useState)(initialDirection);
  const setDirection = (direction) => {
    setDir(direction);
    document.documentElement.setAttribute("dir", direction);
  };
  const toggleDirection = () => setDirection(dir === "ltr" ? "rtl" : "ltr");
  useIsomorphicEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute("dir");
      if (direction === "rtl" || direction === "ltr") {
        setDirection(direction);
      }
    }
  }, []);
  return (0, import_jsx_runtime34.jsx)(DirectionContext.Provider, { value: { dir, toggleDirection, setDirection }, children });
}

// node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react109 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs
var import_react108 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
function getAutoHeightDuration(height) {
  if (!height || typeof height === "string") {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function getElementHeight(el) {
  return (el == null ? void 0 : el.current) ? el.current.scrollHeight : "auto";
}
var raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened
}) {
  const el = (0, import_react108.useRef)(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0, import_react108.useState)(opened ? {} : collapsedStyles);
  const setStyles = (newStyles) => {
    (0, import_react_dom.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles2 = (newStyles) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };
  function getTransitionStyles2(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}, opacity ${_duration}ms ${transitionTimingFunction}`
    };
  }
  useDidUpdate(() => {
    if (typeof raf === "function") {
      if (opened) {
        raf(() => {
          mergeStyles2({ willChange: "height", display: "block", overflow: "hidden" });
          raf(() => {
            const height = getElementHeight(el);
            mergeStyles2({ ...getTransitionStyles2(height), height });
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles2({ ...getTransitionStyles2(height), willChange: "height", height });
          raf(() => mergeStyles2({ height: collapsedHeight, overflow: "hidden" }));
        });
      }
    }
  }, [opened]);
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || e.propertyName !== "height") {
      return;
    }
    if (opened) {
      const height = getElementHeight(el);
      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles2({ height });
      }
      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };
  function getCollapseProps({ style = {}, refKey = "ref", ...rest } = {}) {
    const theirRef = rest[refKey];
    return {
      "aria-hidden": !opened,
      ...rest,
      [refKey]: mergeRefs2(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: { boxSizing: "border-box", ...style, ...styles }
    };
  }
  return getCollapseProps;
}

// node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs
var defaultProps = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
var Collapse = factory((props, ref) => {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    ...others
  } = useProps("Collapse", defaultProps, props);
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? (0, import_jsx_runtime35.jsx)(Box, { ...others, children }) : null;
  }
  return (0, import_jsx_runtime35.jsx)(
    Box,
    {
      ...getCollapseProps({
        style: {
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none",
          ...getStyleObject(style, theme)
        },
        ref,
        ...others
      }),
      children
    }
  );
});
Collapse.displayName = "@mantine/core/Collapse";

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var import_react124 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react111 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs
var import_react110 = __toESM(require_react(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs
function useResizeObserver2(element, onResize) {
  const handleResize = useCallbackRef2(onResize);
  useIsomorphicEffect(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs
var Corner = (0, import_react111.forwardRef)((props, ref) => {
  const { style, ...others } = props;
  const ctx = useScrollAreaContext();
  const [width, setWidth] = (0, import_react111.useState)(0);
  const [height, setHeight] = (0, import_react111.useState)(0);
  const hasSize = Boolean(width && height);
  useResizeObserver2(ctx.scrollbarX, () => {
    var _a;
    const h = ((_a = ctx.scrollbarX) == null ? void 0 : _a.offsetHeight) || 0;
    ctx.onCornerHeightChange(h);
    setHeight(h);
  });
  useResizeObserver2(ctx.scrollbarY, () => {
    var _a;
    const w = ((_a = ctx.scrollbarY) == null ? void 0 : _a.offsetWidth) || 0;
    ctx.onCornerWidthChange(w);
    setWidth(w);
  });
  return hasSize ? (0, import_jsx_runtime37.jsx)("div", { ...others, ref, style: { ...style, width, height } }) : null;
});
var ScrollAreaCorner = (0, import_react111.forwardRef)((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? (0, import_jsx_runtime37.jsx)(Corner, { ...props, ref }) : null;
});

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaRoot/ScrollAreaRoot.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var import_react112 = __toESM(require_react(), 1);
var defaultProps2 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = (0, import_react112.forwardRef)((_props, ref) => {
  const props = useProps("ScrollAreaRoot", defaultProps2, _props);
  const { type, scrollHideDelay, scrollbars, ...others } = props;
  const [scrollArea, setScrollArea] = (0, import_react112.useState)(null);
  const [viewport, setViewport] = (0, import_react112.useState)(null);
  const [content, setContent] = (0, import_react112.useState)(null);
  const [scrollbarX, setScrollbarX] = (0, import_react112.useState)(null);
  const [scrollbarY, setScrollbarY] = (0, import_react112.useState)(null);
  const [cornerWidth, setCornerWidth] = (0, import_react112.useState)(0);
  const [cornerHeight, setCornerHeight] = (0, import_react112.useState)(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react112.useState)(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react112.useState)(false);
  const rootRef = useMergedRef(ref, (node) => setScrollArea(node));
  return (0, import_jsx_runtime38.jsx)(
    ScrollAreaProvider,
    {
      value: {
        type,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
      },
      children: (0, import_jsx_runtime38.jsx)(
        Box,
        {
          ...others,
          ref: rootRef,
          __vars: {
            "--sa-corner-width": scrollbars !== "xy" ? "0px" : `${cornerWidth}px`,
            "--sa-corner-height": scrollbars !== "xy" ? "0px" : `${cornerHeight}px`
          }
        }
      )
    }
  );
});
ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var import_react121 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react118 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react117 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-ratio.mjs
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

// node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

// node_modules/@mantine/core/esm/components/ScrollArea/utils/linear-scale.mjs
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

// node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-offset-from-scroll.mjs
function clamp2(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// node_modules/@mantine/core/esm/components/ScrollArea/utils/get-scroll-position-from-pointer.mjs
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset4 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset4;
  const minPointerPos = sizes.scrollbar.paddingStart + offset4;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var import_react115 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/utils/is-scrolling-within-scrollbar-bounds.mjs
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var import_react114 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.context.mjs
var import_react113 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs
var Scrollbar = (0, import_react114.forwardRef)((props, forwardedRef) => {
  const {
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext();
  const [scrollbar, setScrollbar] = (0, import_react114.useState)(null);
  const composeRefs = useMergedRef(forwardedRef, (node) => setScrollbar(node));
  const rectRef = (0, import_react114.useRef)(null);
  const prevWebkitUserSelectRef = (0, import_react114.useRef)("");
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef2(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef2(onThumbPositionChange);
  const handleResize = useDebouncedCallback(onResize, 10);
  const handleDragScroll = (event) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };
  (0, import_react114.useEffect)(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  (0, import_react114.useEffect)(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver2(scrollbar, handleResize);
  useResizeObserver2(context.content, handleResize);
  return (0, import_jsx_runtime40.jsx)(
    ScrollbarProvider,
    {
      value: {
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef2(onThumbChange),
        onThumbPointerUp: useCallbackRef2(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef2(onThumbPointerDown)
      },
      children: (0, import_jsx_runtime40.jsx)(
        "div",
        {
          ...scrollbarProps,
          ref: composeRefs,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            event.preventDefault();
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              document.body.style.pointerEvents = "none";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            event.preventDefault();
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            document.body.style.pointerEvents = "auto";
            rectRef.current = null;
          })
        }
      )
    }
  );
});

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs
var ScrollAreaScrollbarX = (0, import_react115.forwardRef)(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const ctx = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = (0, import_react115.useState)();
    const ref = (0, import_react115.useRef)(null);
    const composeRefs = useMergedRef(forwardedRef, ref, ctx.onScrollbarXChange);
    (0, import_react115.useEffect)(() => {
      if (ref.current)
        setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);
    return (0, import_jsx_runtime41.jsx)(
      Scrollbar,
      {
        "data-orientation": "horizontal",
        ...others,
        ref: composeRefs,
        sizes,
        style: {
          ...style,
          ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (ctx.viewport) {
            const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && ctx.viewport && computedStyle) {
            onSizesChange({
              content: ctx.viewport.scrollWidth,
              viewport: ctx.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      }
    );
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarY.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react116 = __toESM(require_react(), 1);
var ScrollAreaScrollbarY = (0, import_react116.forwardRef)(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = (0, import_react116.useState)();
    const ref = (0, import_react116.useRef)(null);
    const composeRefs = useMergedRef(forwardedRef, ref, context.onScrollbarYChange);
    (0, import_react116.useEffect)(() => {
      if (ref.current) {
        setComputedStyle(window.getComputedStyle(ref.current));
      }
    }, []);
    return (0, import_jsx_runtime42.jsx)(
      Scrollbar,
      {
        ...others,
        "data-orientation": "vertical",
        ref: composeRefs,
        sizes,
        style: {
          ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`,
          ...style
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      }
    );
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs
var ScrollAreaScrollbarVisible = (0, import_react117.forwardRef)((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = (0, import_react117.useRef)(null);
  const pointerOffsetRef = (0, import_react117.useRef)(0);
  const [sizes, setSizes] = (0, import_react117.useState)({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  };
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, direction);
  if (orientation === "horizontal") {
    return (0, import_jsx_runtime43.jsx)(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset4}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return (0, import_jsx_runtime43.jsx)(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes);
            if (sizes.scrollbar.size === 0) {
              thumbRef.current.style.opacity = "0";
            } else {
              thumbRef.current.style.opacity = "1";
            }
            thumbRef.current.style.transform = `translate3d(0, ${offset4}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs
var ScrollAreaScrollbarAuto = (0, import_react118.forwardRef)(
  (props, ref) => {
    const context = useScrollAreaContext();
    const { forceMount, ...scrollbarProps } = props;
    const [visible2, setVisible] = (0, import_react118.useState)(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebouncedCallback(() => {
      if (context.viewport) {
        const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
        const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
        setVisible(isHorizontal ? isOverflowX : isOverflowY);
      }
    }, 10);
    useResizeObserver2(context.viewport, handleResize);
    useResizeObserver2(context.content, handleResize);
    if (forceMount || visible2) {
      return (0, import_jsx_runtime44.jsx)(
        ScrollAreaScrollbarVisible,
        {
          "data-state": visible2 ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarHover.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var import_react119 = __toESM(require_react(), 1);
var ScrollAreaScrollbarHover = (0, import_react119.forwardRef)(
  (props, ref) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const [visible2, setVisible] = (0, import_react119.useState)(false);
    (0, import_react119.useEffect)(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible2) {
      return (0, import_jsx_runtime45.jsx)(
        ScrollAreaScrollbarAuto,
        {
          "data-state": visible2 ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react120 = __toESM(require_react(), 1);
var ScrollAreaScrollbarScroll = (0, import_react120.forwardRef)(
  (props, red) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const isHorizontal = props.orientation === "horizontal";
    const [state, setState] = (0, import_react120.useState)("hidden");
    const debounceScrollEnd = useDebouncedCallback(() => setState("idle"), 100);
    (0, import_react120.useEffect)(() => {
      if (state === "idle") {
        const hideTimer = window.setTimeout(() => setState("hidden"), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }
      return void 0;
    }, [state, context.scrollHideDelay]);
    (0, import_react120.useEffect)(() => {
      const { viewport } = context;
      const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll2 = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            setState("scrolling");
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
      return void 0;
    }, [context.viewport, isHorizontal, debounceScrollEnd]);
    if (forceMount || state !== "hidden") {
      return (0, import_jsx_runtime46.jsx)(
        ScrollAreaScrollbarVisible,
        {
          "data-state": state === "hidden" ? "hidden" : "visible",
          ...scrollbarProps,
          ref: red,
          onPointerEnter: composeEventHandlers(props.onPointerEnter, () => setState("interacting")),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, () => setState("idle"))
        }
      );
    }
    return null;
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs
var ScrollAreaScrollbar = (0, import_react121.forwardRef)(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    (0, import_react121.useEffect)(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? (0, import_jsx_runtime47.jsx)(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? (0, import_jsx_runtime47.jsx)(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? (0, import_jsx_runtime47.jsx)(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? (0, import_jsx_runtime47.jsx)(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var import_react122 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ScrollArea/utils/add-unlinked-scroll-listener.mjs
function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs
var Thumb = (0, import_react122.forwardRef)((props, forwardedRef) => {
  const { style, ...others } = props;
  const scrollAreaContext = useScrollAreaContext();
  const scrollbarContext = useScrollbarContext();
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = useMergedRef(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = (0, import_react122.useRef)();
  const debounceScrollEnd = useDebouncedCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  (0, import_react122.useEffect)(() => {
    const { viewport } = scrollAreaContext;
    if (viewport) {
      const handleScroll2 = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
    return void 0;
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
  return (0, import_jsx_runtime48.jsx)(
    "div",
    {
      "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
      ...others,
      ref: composedRef,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...style
      },
      onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
        const thumb = event.target;
        const thumbRect = thumb.getBoundingClientRect();
        const x = event.clientX - thumbRect.left;
        const y = event.clientY - thumbRect.top;
        scrollbarContext.onThumbPointerDown({ x, y });
      }),
      onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    }
  );
});
var ScrollAreaThumb = (0, import_react122.forwardRef)(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext();
    if (forceMount || scrollbarContext.hasThumb) {
      return (0, import_jsx_runtime48.jsx)(Thumb, { ref: forwardedRef, ...thumbProps });
    }
    return null;
  }
);

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaViewport/ScrollAreaViewport.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var import_react123 = __toESM(require_react(), 1);
var ScrollAreaViewport = (0, import_react123.forwardRef)(
  ({ children, style, ...others }, ref) => {
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);
    return (0, import_jsx_runtime49.jsx)(
      Box,
      {
        ...others,
        ref: rootRef,
        style: {
          overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden",
          ...style
        },
        children: (0, import_jsx_runtime49.jsx)("div", { style: { minWidth: "100%", display: "table" }, ref: ctx.onContentChange, children })
      }
    );
  }
);
ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport";

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.module.css.mjs
var classes = { "root": "m_d57069b5", "viewport": "m_c0783ff9", "viewportInner": "m_f8f631dd", "scrollbar": "m_c44ba933", "thumb": "m_d8b5e363", "corner": "m_21657268" };

// node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs
var defaultProps3 = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
};
var varsResolver = createVarsResolver((_, { scrollbarSize }) => ({
  root: {
    "--scrollarea-scrollbar-size": rem(scrollbarSize)
  }
}));
var ScrollArea = factory((_props, ref) => {
  const props = useProps("ScrollArea", defaultProps3, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars,
    scrollbars,
    ...others
  } = props;
  const [scrollbarHovered, setScrollbarHovered] = (0, import_react124.useState)(false);
  const getStyles2 = useStyles({
    name: "ScrollArea",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return (0, import_jsx_runtime50.jsxs)(
    ScrollAreaRoot,
    {
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref,
      scrollbars,
      ...getStyles2("root"),
      ...others,
      children: [
        (0, import_jsx_runtime50.jsx)(
          ScrollAreaViewport,
          {
            ...viewportProps,
            ...getStyles2("viewport", { style: viewportProps == null ? void 0 : viewportProps.style }),
            ref: viewportRef,
            "data-offset-scrollbars": offsetScrollbars === true ? "xy" : offsetScrollbars || void 0,
            "data-scrollbars": scrollbars || void 0,
            onScroll: (e) => {
              var _a;
              (_a = viewportProps == null ? void 0 : viewportProps.onScroll) == null ? void 0 : _a.call(viewportProps, e);
              onScrollPositionChange == null ? void 0 : onScrollPositionChange({ x: e.currentTarget.scrollLeft, y: e.currentTarget.scrollTop });
            },
            children
          }
        ),
        (scrollbars === "xy" || scrollbars === "x") && (0, import_jsx_runtime50.jsx)(
          ScrollAreaScrollbar,
          {
            ...getStyles2("scrollbar"),
            orientation: "horizontal",
            "data-hidden": type === "never" || void 0,
            forceMount: true,
            onMouseEnter: () => setScrollbarHovered(true),
            onMouseLeave: () => setScrollbarHovered(false),
            children: (0, import_jsx_runtime50.jsx)(ScrollAreaThumb, { ...getStyles2("thumb") })
          }
        ),
        (scrollbars === "xy" || scrollbars === "y") && (0, import_jsx_runtime50.jsx)(
          ScrollAreaScrollbar,
          {
            ...getStyles2("scrollbar"),
            orientation: "vertical",
            "data-hidden": type === "never" || void 0,
            forceMount: true,
            onMouseEnter: () => setScrollbarHovered(true),
            onMouseLeave: () => setScrollbarHovered(false),
            children: (0, import_jsx_runtime50.jsx)(ScrollAreaThumb, { ...getStyles2("thumb") })
          }
        ),
        (0, import_jsx_runtime50.jsx)(
          ScrollAreaCorner,
          {
            ...getStyles2("corner"),
            "data-hovered": scrollbarHovered || void 0,
            "data-hidden": type === "never" || void 0
          }
        )
      ]
    }
  );
});
ScrollArea.displayName = "@mantine/core/ScrollArea";
var ScrollAreaAutosize = factory((props, ref) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    scrollbars,
    style,
    vars,
    ...others
  } = useProps("ScrollAreaAutosize", defaultProps3, props);
  return (0, import_jsx_runtime50.jsx)(Box, { ...others, ref, style: [{ display: "flex", overflow: "auto" }, style], children: (0, import_jsx_runtime50.jsx)(Box, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: (0, import_jsx_runtime50.jsx)(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars,
      scrollbars,
      children
    }
  ) }) });
});
ScrollArea.classes = classes;
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
ScrollAreaAutosize.classes = classes;
ScrollArea.Autosize = ScrollAreaAutosize;

// node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var import_react125 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs
var classes2 = { "root": "m_87cf2631" };

// node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
var defaultProps4 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps4, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;
    const getStyles2 = useStyles({
      name: __staticSelector,
      props,
      classes: classes2,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return (0, import_jsx_runtime51.jsx)(
      Box,
      {
        ...getStyles2("root", { focusable: true }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
      }
    );
  }
);
UnstyledButton.classes = classes2;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";

// node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var import_react126 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.module.css.mjs
var classes3 = { "root": "m_515a97f8" };

// node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs
var defaultProps5 = {};
var VisuallyHidden = factory((_props, ref) => {
  const props = useProps("VisuallyHidden", defaultProps5, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const getStyles2 = useStyles({
    name: "VisuallyHidden",
    classes: classes3,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  return (0, import_jsx_runtime52.jsx)(Box, { component: "span", ref, ...getStyles2("root"), ...others });
});
VisuallyHidden.classes = classes3;
VisuallyHidden.displayName = "@mantine/core/VisuallyHidden";

// node_modules/@mantine/core/esm/components/Paper/Paper.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var import_react127 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs
var classes4 = { "root": "m_1b7284a3" };

// node_modules/@mantine/core/esm/components/Paper/Paper.mjs
var defaultProps6 = {};
var varsResolver2 = createVarsResolver((_, { radius, shadow }) => ({
  root: {
    "--paper-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--paper-shadow": getShadow(shadow)
  }
}));
var Paper = polymorphicFactory((_props, ref) => {
  const props = useProps("Paper", defaultProps6, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Paper",
    props,
    classes: classes4,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return (0, import_jsx_runtime53.jsx)(
    Box,
    {
      ref,
      mod: [{ "data-with-border": withBorder }, mod],
      ...getStyles2("root"),
      variant,
      ...others
    }
  );
});
Paper.classes = classes4;
Paper.displayName = "@mantine/core/Paper";

// node_modules/@mantine/core/esm/components/Popover/Popover.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var import_react143 = __toESM(require_react(), 1);

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React12 = __toESM(require_react(), 1);
var import_react129 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode2(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode2(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode2(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement2(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isTopLayer(currentNode)) {
      return null;
    }
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement2(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function activeElement(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM()) return false;
  return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes("jsdom/");
}
function isMouseLikePointerType(pointerType, strict) {
  const values2 = ["mouse", "pen"];
  if (!strict) {
    values2.push("", void 0);
  }
  return values2.includes(pointerType);
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isRootElement(element) {
  return element.matches("html,body");
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp3(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp3(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
var inline = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform: platform2,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect2() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = getSide(placement) === "left";
          const maxRight = max(...clientRects.map((rect) => rect.right));
          const minLeft = min(...clientRects.map((rect) => rect.left));
          const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform2.getElementRects({
        reference: {
          getBoundingClientRect: getBoundingClientRect2
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp3(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp3(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement2(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement2(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement2(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement2(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement2(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement2(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement2(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement2(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement2,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var arrow2 = arrow;
var inline2 = inline;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React11 = __toESM(require_react(), 1);
var import_react128 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react128.useLayoutEffect : import_react128.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys2;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys2[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys2[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React11.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React11.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React11.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React11.useState(null);
  const [_floating, _setFloating] = React11.useState(null);
  const setReference = React11.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React11.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React11.useRef(null);
  const floatingRef = React11.useRef(null);
  const dataRef = React11.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React11.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React11.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React11.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React11.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React11.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React11.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var inline3 = (options, deps) => ({
  ...inline2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
function useMergeRefs2(refs) {
  return React12.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React12
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React12.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React12.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index5, cols, prevRow) {
  return Math.floor(index5 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index5) {
  return index5 < 0 || index5 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index5 = startingIndex;
  do {
    index5 += decrement ? -amount : amount;
  } while (index5 >= 0 && index5 <= list.length - 1 && isDisabled(list, index5, disabledIndices));
  return index5;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset4 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset4 : offset4 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index5) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index5 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index5;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index5, sizes, cellMap, cols, corner) {
  if (index5 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index5);
  const sizeItem = sizes[index5];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index5);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index5, cellIndex) => indices.includes(index5) ? [cellIndex] : []);
}
function isDisabled(list, index5, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index5);
  }
  const element = list[index5];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react129.useLayoutEffect : import_react129.useEffect;
function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React12.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React12.useState(() => /* @__PURE__ */ new Map());
  const register = React12.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React12.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index5) => {
      newMap.set(node, index5);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React12.createElement(FloatingListContext.Provider, {
    value: React12.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React12.useContext(FloatingListContext);
  const [index$1, setIndex] = React12.useState(null);
  const componentRef = React12.useRef(null);
  const ref = React12.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index5 = componentRef.current ? map.get(componentRef.current) : null;
    if (index5 != null) {
      setIndex(index5);
    }
  }, [map]);
  return React12.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React12.cloneElement(render, computedProps);
  }
  return React12.createElement("div", computedProps);
}
var CompositeContext = React12.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React12.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React12.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React12.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React12.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index5) => index5 != null && !isDisabled(elementsRef.current, index5, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index5, cellIndex) => index5 != null && !isDisabled(elementsRef.current, index5, disabledIndices) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_, index5) => isDisabled(elementsRef.current, index5) ? index5 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e) {
      domProps.onKeyDown == null || domProps.onKeyDown(e);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e);
      handleKeyDown(e);
    }
  };
  return React12.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React12.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React12.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React12.useContext(CompositeContext);
  const {
    ref,
    index: index5
  } = useListItem();
  const mergedRef = useMergeRefs2([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index5;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e) {
      domProps.onFocus == null || domProps.onFocus(e);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e);
      onNavigate(index5);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React12.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React12.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId2 = SafeReact.useId;
var useId3 = useReactId2 || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React12.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId3();
  const [isRTL2, setIsRTL] = React12.useState(false);
  index2(() => {
    if (!floating) return;
    const isRTL3 = getComputedStyle2(floating).direction === "rtl";
    if (isRTL3) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isCustomShape = !!d;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? staticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? staticOffset || arrow4.y : "";
  const dValue = d || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React12.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React12.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d ? 0 : 1),
    d: dValue
  }), React12.createElement("path", {
    stroke: computedStrokeWidth && !d ? rest.fill : "none",
    d: dValue
  }), React12.createElement("clipPath", {
    id: clipPathId
  }, React12.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React12.createContext(null);
var FloatingTreeContext = React12.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React12.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React12.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
function useLatestRef2(value) {
  const ref = (0, import_react129.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
function useHover2(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const openRef = useLatestRef2(open);
  const pointerTypeRef = React12.useRef();
  const timeoutRef = React12.useRef(-1);
  const handlerRef = React12.useRef();
  const restTimeoutRef = React12.useRef(-1);
  const blockMouseMoveRef = React12.useRef(true);
  const performedPointerEventsMutationRef = React12.useRef(false);
  const unbindMouseMoveRef = React12.useRef(() => {
  });
  const isHoverOpen = React12.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React12.useEffect(() => {
    if (!enabled) return;
    function onOpenChange2(_ref) {
      let {
        open: open2
      } = _ref;
      if (!open2) {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  React12.useEffect(() => {
    if (!enabled) return;
    if (!handleCloseRef.current) return;
    if (!open) return;
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, "hover");
      }
    }
    const html = getDocument(elements.floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [elements.floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = React12.useCallback(function(event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = "hover";
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = useEffectEvent(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  });
  const clearPointerEvents = useEffectEvent(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(elements.floating).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  });
  React12.useEffect(() => {
    if (!enabled) return;
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && !getDelay(delayRef.current, "open")) {
        return;
      }
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = window.setTimeout(() => {
          if (!openRef.current) {
            onOpenChange(true, event, "hover");
          }
        }, openDelay);
      } else {
        onOpenChange(true, event, "hover");
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      unbindMouseMoveRef.current();
      const doc = getDocument(elements.floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current && dataRef.current.floatingContext) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...dataRef.current.floatingContext,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay(event, true, "safe-polygon");
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      const shouldClose = pointerTypeRef.current === "touch" ? !contains(elements.floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      if (!dataRef.current.floatingContext) return;
      handleCloseRef.current == null || handleCloseRef.current({
        ...dataRef.current.floatingContext,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay(event);
        }
      })(event);
    }
    if (isElement2(elements.domReference)) {
      var _elements$floating;
      const ref = elements.domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      (_elements$floating = elements.floating) == null || _elements$floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        var _elements$floating2;
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        (_elements$floating2 = elements.floating) == null || _elements$floating2.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [elements, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, openRef, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) return;
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(elements.floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      const floatingEl = elements.floating;
      if (isElement2(elements.domReference) && floatingEl) {
        var _tree$nodesRef$curren;
        const ref = elements.domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floatingEl.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floatingEl.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, elements, tree, handleCloseRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React12.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, elements.domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  const reference = React12.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          if (!blockMouseMoveRef.current && !openRef.current) {
            onOpenChange(true, nativeEvent, "hover");
          }
        }
        if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current)) {
          return;
        }
        if (open || restMs === 0) {
          return;
        }
        clearTimeout(restTimeoutRef.current);
        if (pointerTypeRef.current === "touch") {
          handleMouseMove();
        } else {
          restTimeoutRef.current = window.setTimeout(handleMouseMove, restMs);
        }
      }
    };
  }, [mouseOnly, onOpenChange, open, openRef, restMs]);
  const floating = React12.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(timeoutRef.current);
    },
    onMouseLeave(event) {
      closeWithDelay(event.nativeEvent, false);
    }
  }), [closeWithDelay]);
  return React12.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}
var NOOP = () => {
};
var FloatingDelayGroupContext = React12.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var useDelayGroupContext = () => React12.useContext(FloatingDelayGroupContext);
function FloatingDelayGroup(props) {
  const {
    children,
    delay,
    timeoutMs = 0
  } = props;
  const [state, setState] = React12.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = React12.useRef(null);
  const setCurrentId = React12.useCallback((currentId) => {
    setState({
      currentId
    });
  }, []);
  index2(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else if (!state.isInstantPhase) {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      if (state.isInstantPhase) {
        setState({
          isInstantPhase: false
        });
      }
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId, state.isInstantPhase]);
  return React12.createElement(FloatingDelayGroupContext.Provider, {
    value: React12.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setCurrentId])
  }, children);
}
function useDelayGroup(context, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open,
    onOpenChange,
    floatingId
  } = context;
  const {
    id: optionId
  } = options;
  const id = optionId != null ? optionId : floatingId;
  const groupContext = useDelayGroupContext();
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = groupContext;
  index2(() => {
    if (!currentId) return;
    setState({
      delay: {
        open: 1,
        close: getDelay(initialDelay, "close")
      }
    });
    if (currentId !== id) {
      onOpenChange(false);
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  index2(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    if (!currentId) return;
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      }
      unset();
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  index2(() => {
    if (setCurrentId === NOOP || !open) return;
    setCurrentId(id);
  }, [open, setCurrentId, id]);
  return groupContext;
}
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React12.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React12.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React12.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React12.createContext(null);
var attr = createAttribute("portal");
var VisuallyHiddenDismiss = React12.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React12.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React12.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  const lockId = useId3();
  index2(() => {
    if (!lockScroll) return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React12.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeProp = (normalizable) => {
  var _normalizable$escapeK, _normalizable$outside;
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
  };
};
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    elements,
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React12.useRef(false);
  const endedOrStartedInsideRef = React12.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const closeOnEscapeKeyDown = useEffectEvent((event) => {
    var _dataRef$current$floa;
    if (!open || !enabled || !escapeKey || event.key !== "Escape") {
      return;
    }
    const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, "escape-key");
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent((event) => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = getTarget(event)) == null || _getTarget.removeEventListener("keydown", callback);
    };
    (_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener("keydown", callback);
  });
  const closeOnPressOutside = useEffectEvent((event) => {
    var _dataRef$current$floa2;
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === "click" && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === "function" && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    const inertSelector = "[" + createAttribute("inert") + "]";
    const markers = getDocument(elements.floating).querySelectorAll(inertSelector);
    let targetRootAncestor = isElement2(target) ? target : null;
    while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
      const nextParent = getParentNode(targetRootAncestor);
      if (isLastTraversableNode(nextParent) || !isElement2(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }
    if (markers.length && isElement2(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !contains(target, elements.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every((marker) => !contains(targetRootAncestor, marker))) {
      return;
    }
    if (isHTMLElement(target) && floating) {
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;
      if (canScrollY) {
        const isRTL2 = getComputedStyle2(target).direction === "rtl";
        if (isRTL2) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, elements.floating) || isEventTargetWithin(event, elements.domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach((child) => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, "outside-press");
  });
  const closeOnPressOutsideCapture = useEffectEvent((event) => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  React12.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll(event) {
      onOpenChange(false, event, "ancestor-scroll");
    }
    const doc = getDocument(elements.floating);
    escapeKey && doc.addEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement2(elements.domReference)) {
        ancestors = getOverflowAncestors(elements.domReference);
      }
      if (isElement2(elements.floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(elements.floating));
      }
      if (!isElement2(elements.reference) && elements.reference && elements.reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(elements.reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, elements, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  React12.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  const reference = React12.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    [bubbleHandlerKeys[referencePressEvent]]: (event) => {
      if (referencePress) {
        onOpenChange(false, event.nativeEvent, "reference-press");
      }
    }
  }), [closeOnEscapeKeyDown, onOpenChange, referencePress, referencePressEvent]);
  const floating = React12.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onMouseDown() {
      endedOrStartedInsideRef.current = true;
    },
    onMouseUp() {
      endedOrStartedInsideRef.current = true;
    },
    [captureHandlerKeys[outsidePressEvent]]: () => {
      insideReactTreeRef.current = true;
    }
  }), [closeOnEscapeKeyDown, outsidePressEvent]);
  return React12.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId3();
  const dataRef = React12.useRef({});
  const [events] = React12.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement2(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React12.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React12.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React12.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React12.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React12.useState(null);
  const [positionReference, _setPositionReference] = React12.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React12.useRef(null);
  const tree = useFloatingTree();
  index2(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React12.useCallback((node) => {
    const computedPositionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React12.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React12.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React12.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React12.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index2(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React12.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    dataRef,
    elements
  } = context;
  const {
    enabled = true,
    visibleOnly = true
  } = props;
  const blockFocusRef = React12.useRef(false);
  const timeoutRef = React12.useRef();
  const keyboardModalityRef = React12.useRef(true);
  React12.useEffect(() => {
    if (!enabled) return;
    const win = getWindow(elements.domReference);
    function onBlur() {
      if (!open && isHTMLElement(elements.domReference) && elements.domReference === activeElement(getDocument(elements.domReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    win.addEventListener("blur", onBlur);
    win.addEventListener("keydown", onKeyDown, true);
    return () => {
      win.removeEventListener("blur", onBlur);
      win.removeEventListener("keydown", onKeyDown, true);
    };
  }, [elements.domReference, open, enabled]);
  React12.useEffect(() => {
    if (!enabled) return;
    function onOpenChange2(_ref) {
      let {
        reason
      } = _ref;
      if (reason === "reference-press" || reason === "escape-key") {
        blockFocusRef.current = true;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [events, enabled]);
  React12.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const reference = React12.useMemo(() => ({
    onPointerDown(event) {
      if (isVirtualPointerEvent(event.nativeEvent)) return;
      keyboardModalityRef.current = false;
    },
    onMouseLeave() {
      blockFocusRef.current = false;
    },
    onFocus(event) {
      if (blockFocusRef.current) return;
      const target = getTarget(event.nativeEvent);
      if (visibleOnly && isElement2(target)) {
        try {
          if (isSafari() && isMac()) throw Error();
          if (!target.matches(":focus-visible")) return;
        } catch (e) {
          if (!keyboardModalityRef.current && !isTypeableElement(target)) {
            return;
          }
        }
      }
      onOpenChange(true, event.nativeEvent, "focus");
    },
    onBlur(event) {
      blockFocusRef.current = false;
      const relatedTarget = event.relatedTarget;
      const nativeEvent = event.nativeEvent;
      const movedToFocusGuard = isElement2(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
      timeoutRef.current = window.setTimeout(() => {
        var _dataRef$current$floa;
        const activeEl = activeElement(elements.domReference ? elements.domReference.ownerDocument : document);
        if (!relatedTarget && activeEl === elements.domReference) return;
        if (contains((_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.refs.floating.current, activeEl) || contains(elements.domReference, activeEl) || movedToFocusGuard) {
          return;
        }
        onOpenChange(false, nativeEvent, "focus");
      });
    }
  }), [dataRef, elements.domReference, onOpenChange, visibleOnly]);
  return React12.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = React12.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React12.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React12.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React12.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
var componentRoleToAriaRoleMap = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
function useRole(context, props) {
  var _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = "dialog"
  } = props;
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const referenceId = useId3();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  const reference = React12.useMemo(() => {
    if (ariaRole === "tooltip" || role === "label") {
      return {
        ["aria-" + (role === "label" ? "labelledby" : "describedby")]: open ? floatingId : void 0
      };
    }
    return {
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
      "aria-controls": open ? floatingId : void 0,
      ...ariaRole === "listbox" && {
        role: "combobox"
      },
      ...ariaRole === "menu" && {
        id: referenceId
      },
      ...ariaRole === "menu" && isNested && {
        role: "menuitem"
      },
      ...role === "select" && {
        "aria-autocomplete": "none"
      },
      ...role === "combobox" && {
        "aria-autocomplete": "list"
      }
    };
  }, [ariaRole, floatingId, isNested, open, referenceId, role]);
  const floating = React12.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...ariaRole && {
        role: ariaRole
      }
    };
    if (ariaRole === "tooltip" || role === "label") {
      return floatingProps;
    }
    return {
      ...floatingProps,
      ...ariaRole === "menu" && {
        "aria-labelledby": referenceId
      }
    };
  }, [ariaRole, floatingId, referenceId, role]);
  const item = React12.useCallback((_ref) => {
    let {
      active,
      selected
    } = _ref;
    const commonProps = {
      role: "option",
      ...active && {
        id: floatingId + "-option"
      }
    };
    switch (role) {
      case "select":
        return {
          ...commonProps,
          "aria-selected": active && selected
        };
      case "combobox": {
        return {
          ...commonProps,
          ...active && {
            "aria-selected": true
          }
        };
      }
    }
    return {};
  }, [floatingId, role]);
  return React12.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

// node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var import_react130 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Floating/FloatingArrow/get-arrow-position-styles.mjs
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
var radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: arrowRadius
  };
  const arrowPlacement = -arrowSize / 2;
  if (side === "left") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent"
    };
  }
  if (side === "right") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent"
    };
  }
  if (side === "top") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent"
    };
  }
  if (side === "bottom") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent"
    };
  }
  return {};
}

// node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs
var FloatingArrow3 = (0, import_react130.forwardRef)(
  ({
    position,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    visible: visible2,
    arrowX,
    arrowY,
    style,
    ...others
  }, ref) => {
    const { dir } = useDirection();
    if (!visible2) {
      return null;
    }
    return (0, import_jsx_runtime54.jsx)(
      "div",
      {
        ...others,
        ref,
        style: {
          ...style,
          ...getArrowPositionStyles({
            position,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            dir,
            arrowX,
            arrowY
          })
        }
      }
    );
  }
);
FloatingArrow3.displayName = "@mantine/core/FloatingArrow";

// node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs
var import_react131 = __toESM(require_react(), 1);
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var import_react136 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var import_react132 = __toESM(require_react(), 1);
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement(children)) {
    return children;
  }
  return (0, import_react132.cloneElement)(children, { [refProp]: ref });
}
function FocusTrapInitialFocus(props) {
  return (0, import_jsx_runtime56.jsx)(VisuallyHidden, { tabIndex: -1, "data-autofocus": true, ...props });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";
FocusTrapInitialFocus.displayName = "@mantine/core/FocusTrapInitialFocus";
FocusTrap.InitialFocus = FocusTrapInitialFocus;

// node_modules/@mantine/core/esm/components/Portal/Portal.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var import_react133 = __toESM(require_react(), 1);
var import_react_dom4 = __toESM(require_react_dom(), 1);
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps7 = {};
var Portal = (0, import_react133.forwardRef)((props, ref) => {
  const { children, target, ...others } = useProps("Portal", defaultProps7, props);
  const [mounted, setMounted] = (0, import_react133.useState)(false);
  const nodeRef = (0, import_react133.useRef)(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef2(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0, import_react_dom4.createPortal)((0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children }), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";

// node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
function OptionalPortal({ withinPortal = true, children, ...others }) {
  if (withinPortal) {
    return (0, import_jsx_runtime58.jsx)(Portal, { ...others, children });
  }
  return (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children });
}
OptionalPortal.displayName = "@mantine/core/OptionalPortal";

// node_modules/@mantine/core/esm/components/Transition/transitions.mjs
var import_react134 = __toESM(require_react(), 1);
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var popIn = (from) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem(from === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
});
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${rem(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${rem(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${rem(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${rem(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
};

// node_modules/@mantine/core/esm/components/Transition/Transition.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]]
    };
  }
  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]]
  };
}

// node_modules/@mantine/core/esm/components/Transition/use-transition.mjs
var import_react135 = __toESM(require_react(), 1);
var import_react_dom5 = __toESM(require_react_dom(), 1);
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
  enterDelay,
  exitDelay
}) {
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0, import_react135.useState)(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = (0, import_react135.useState)(mounted ? "entered" : "exited");
  const transitionTimeoutRef = (0, import_react135.useRef)(-1);
  const delayTimeoutRef = (0, import_react135.useRef)(-1);
  const rafRef = (0, import_react135.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    window.clearTimeout(transitionTimeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      rafRef.current = requestAnimationFrame(() => {
        import_react_dom5.default.flushSync(() => {
          setStatus(shouldMount ? "pre-entering" : "pre-exiting");
        });
        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === "function" && preHandler();
          setStatus(shouldMount ? "entering" : "exiting");
          transitionTimeoutRef.current = window.setTimeout(() => {
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
          }, newTransitionDuration);
        });
      });
    }
  };
  const handleTransitionWithDelay = (shouldMount) => {
    window.clearTimeout(delayTimeoutRef.current);
    const delay = shouldMount ? enterDelay : exitDelay;
    if (typeof delay !== "number") {
      handleStateChange(shouldMount);
      return;
    }
    delayTimeoutRef.current = window.setTimeout(
      () => {
        handleStateChange(shouldMount);
      },
      shouldMount ? enterDelay : exitDelay
    );
  };
  useDidUpdate(() => {
    handleTransitionWithDelay(mounted);
  }, [mounted]);
  (0, import_react135.useEffect)(
    () => () => {
      window.clearTimeout(transitionTimeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    },
    []
  );
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// node_modules/@mantine/core/esm/components/Transition/Transition.mjs
function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited,
  enterDelay,
  exitDelay
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay
  });
  if (transitionDuration === 0) {
    return mounted ? (0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, { children: children({}) }) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : (0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, { children: children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ) });
}
Transition.displayName = "@mantine/core/Transition";

// node_modules/@mantine/core/esm/components/Popover/Popover.module.css.mjs
var classes5 = { "dropdown": "m_38a85659", "arrow": "m_a31dc6c1" };

// node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs
var defaultProps8 = {};
var PopoverDropdown = factory((_props, ref) => {
  var _a, _b, _c, _d;
  const props = useProps("PopoverDropdown", defaultProps8, _props);
  const {
    className,
    style,
    vars,
    children,
    onKeyDownCapture,
    variant,
    classNames,
    styles,
    ...others
  } = props;
  const ctx = usePopoverContext();
  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus
  });
  const accessibleProps = ctx.withRoles ? {
    "aria-labelledby": ctx.getTargetId(),
    id: ctx.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {};
  const mergedRef = useMergedRef(ref, ctx.floating);
  if (ctx.disabled) {
    return null;
  }
  return (0, import_jsx_runtime62.jsx)(OptionalPortal, { ...ctx.portalProps, withinPortal: ctx.withinPortal, children: (0, import_jsx_runtime62.jsx)(
    Transition,
    {
      mounted: ctx.opened,
      ...ctx.transitionProps,
      transition: ((_a = ctx.transitionProps) == null ? void 0 : _a.transition) || "fade",
      duration: ((_b = ctx.transitionProps) == null ? void 0 : _b.duration) ?? 150,
      keepMounted: ctx.keepMounted,
      exitDuration: typeof ((_c = ctx.transitionProps) == null ? void 0 : _c.exitDuration) === "number" ? ctx.transitionProps.exitDuration : (_d = ctx.transitionProps) == null ? void 0 : _d.duration,
      children: (transitionStyles) => (0, import_jsx_runtime62.jsx)(FocusTrap, { active: ctx.trapFocus, children: (0, import_jsx_runtime62.jsxs)(
        Box,
        {
          ...accessibleProps,
          ...others,
          variant,
          ref: mergedRef,
          onKeyDownCapture: closeOnEscape(ctx.onClose, {
            active: ctx.closeOnEscape,
            onTrigger: returnFocus,
            onKeyDown: onKeyDownCapture
          }),
          "data-position": ctx.placement,
          "data-fixed": ctx.floatingStrategy === "fixed" || void 0,
          ...ctx.getStyles("dropdown", {
            className,
            props,
            classNames,
            styles,
            style: [
              {
                ...transitionStyles,
                zIndex: ctx.zIndex,
                top: ctx.y ?? 0,
                left: ctx.x ?? 0,
                width: ctx.width === "target" ? void 0 : rem(ctx.width)
              },
              style
            ]
          }),
          children: [
            children,
            (0, import_jsx_runtime62.jsx)(
              FloatingArrow3,
              {
                ref: ctx.arrowRef,
                arrowX: ctx.arrowX,
                arrowY: ctx.arrowY,
                visible: ctx.withArrow,
                position: ctx.placement,
                arrowSize: ctx.arrowSize,
                arrowRadius: ctx.arrowRadius,
                arrowOffset: ctx.arrowOffset,
                arrowPosition: ctx.arrowPosition,
                ...ctx.getStyles("arrow", {
                  props,
                  classNames,
                  styles
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
PopoverDropdown.classes = classes5;
PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";

// node_modules/@mantine/core/esm/components/Popover/PopoverTarget/PopoverTarget.mjs
var import_react138 = __toESM(require_react(), 1);
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var defaultProps9 = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = factory((props, ref) => {
  const { children, refProp, popupType, ...others } = useProps(
    "PopoverTarget",
    defaultProps9,
    props
  );
  if (!isElement(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return (0, import_react138.cloneElement)(children, {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: clsx_default(ctx.targetProps.className, forwardedProps.className, children.props.className),
    [refProp]: targetRef,
    ...!ctx.controlled ? { onClick: ctx.onToggle } : null
  });
});
PopoverTarget.displayName = "@mantine/core/PopoverTarget";

// node_modules/@mantine/core/esm/components/Popover/use-popover.mjs
var import_react142 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs
var import_react139 = __toESM(require_react(), 1);
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0, import_react139.useState)(0);
  (0, import_react139.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  useDidUpdate(() => {
    floating.update();
  }, positionDependencies);
  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}

// node_modules/@mantine/core/esm/components/Popover/use-popover.mjs
function getDefaultMiddlewares(middlewares) {
  if (middlewares === void 0) {
    return { shift: true, flip: true };
  }
  const result = { ...middlewares };
  if (middlewares.shift === void 0) {
    result.shift = true;
  }
  if (middlewares.flip === void 0) {
    result.flip = true;
  }
  return result;
}
function getPopoverMiddlewares(options, getFloating) {
  const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
  const middlewares = [offset3(options.offset)];
  if (middlewaresOptions.shift) {
    middlewares.push(
      shift3(
        typeof middlewaresOptions.shift === "boolean" ? { limiter: limitShift3(), padding: 5 } : { limiter: limitShift3(), padding: 5, ...middlewaresOptions.shift }
      )
    );
  }
  if (middlewaresOptions.flip) {
    middlewares.push(
      typeof middlewaresOptions.flip === "boolean" ? flip3() : flip3(middlewaresOptions.flip)
    );
  }
  if (middlewaresOptions.inline) {
    middlewares.push(
      typeof middlewaresOptions.inline === "boolean" ? inline3() : inline3(middlewaresOptions.inline)
    );
  }
  middlewares.push(arrow3({ element: options.arrowRef, padding: options.arrowOffset }));
  if (middlewaresOptions.size || options.width === "target") {
    middlewares.push(
      size3({
        ...typeof middlewaresOptions.size === "boolean" ? {} : middlewaresOptions.size,
        apply({ rects, availableWidth, availableHeight }) {
          var _a;
          const floating = getFloating();
          const styles = ((_a = floating.refs.floating.current) == null ? void 0 : _a.style) ?? {};
          if (middlewaresOptions.size) {
            Object.assign(styles, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`
            });
          }
          if (options.width === "target") {
            Object.assign(styles, {
              width: `${rects.reference.width}px`
            });
          }
        }
      })
    );
  }
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange
  });
  const onClose = () => {
    var _a;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    }
  };
  const onToggle = () => {
    var _a, _b;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
      setOpened(true);
    }
  };
  const floating = useFloating2({
    strategy: options.strategy,
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating)
  });
  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  useDidUpdate(() => {
    var _a;
    (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
  }, [floating.placement]);
  useDidUpdate(() => {
    var _a, _b;
    if (!options.opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
    }
  }, [options.opened]);
  return {
    floating,
    controlled: typeof options.opened === "boolean",
    opened: _opened,
    onClose,
    onToggle
  };
}

// node_modules/@mantine/core/esm/components/Popover/Popover.mjs
var defaultProps10 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: getDefaultZIndex("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver3 = createVarsResolver((_, { radius, shadow }) => ({
  dropdown: {
    "--popover-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--popover-shadow": getShadow(shadow)
  }
}));
function Popover(_props) {
  var _a, _b, _c, _d, _e, _f;
  const props = useProps("Popover", defaultProps10, _props);
  const {
    children,
    position,
    offset: offset4,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape: closeOnEscape2,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    vars,
    floatingStrategy,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: __staticSelector,
    props,
    classes: classes5,
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver: varsResolver3
  });
  const arrowRef = (0, import_react143.useRef)(null);
  const [targetNode, setTargetNode] = (0, import_react143.useState)(null);
  const [dropdownNode, setDropdownNode] = (0, import_react143.useState)(null);
  const { dir } = useDirection();
  const uid = useId(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset4 === "number" ? offset4 + (withArrow ? arrowSize / 2 : 0) : offset4,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
    strategy: floatingStrategy
  });
  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
    targetNode,
    dropdownNode
  ]);
  const reference = (0, import_react143.useCallback)(
    (node) => {
      setTargetNode(node);
      popover.floating.refs.setReference(node);
    },
    [popover.floating.refs.setReference]
  );
  const floating = (0, import_react143.useCallback)(
    (node) => {
      setDropdownNode(node);
      popover.floating.refs.setFloating(node);
    },
    [popover.floating.refs.setFloating]
  );
  return (0, import_jsx_runtime64.jsx)(
    PopoverContextProvider,
    {
      value: {
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: (_c = (_b = (_a = popover.floating) == null ? void 0 : _a.middlewareData) == null ? void 0 : _b.arrow) == null ? void 0 : _c.x,
        arrowY: (_f = (_e = (_d = popover.floating) == null ? void 0 : _d.middlewareData) == null ? void 0 : _e.arrow) == null ? void 0 : _f.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape: closeOnEscape2,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles: getStyles2,
        floatingStrategy
      },
      children
    }
  );
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@mantine/core/Popover";
Popover.extend = (input) => input;

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var import_react150 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Loader/Loader.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var import_react148 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var import_react145 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs
var classes6 = { "root": "m_5ae2e3c", "barsLoader": "m_7a2bd4cd", "bar": "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", "dotsLoader": "m_4e3f22d7", "dot": "m_870c4af", "loader-dots-animation": "m_aac34a1", "ovalLoader": "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };

// node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
var Bars = (0, import_react145.forwardRef)(({ className, ...others }, ref) => (0, import_jsx_runtime65.jsxs)(Box, { component: "span", className: clsx_default(classes6.barsLoader, className), ...others, ref, children: [
  (0, import_jsx_runtime65.jsx)("span", { className: classes6.bar }),
  (0, import_jsx_runtime65.jsx)("span", { className: classes6.bar }),
  (0, import_jsx_runtime65.jsx)("span", { className: classes6.bar })
] }));

// node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var import_react146 = __toESM(require_react(), 1);
var Dots = (0, import_react146.forwardRef)(({ className, ...others }, ref) => (0, import_jsx_runtime66.jsxs)(Box, { component: "span", className: clsx_default(classes6.dotsLoader, className), ...others, ref, children: [
  (0, import_jsx_runtime66.jsx)("span", { className: classes6.dot }),
  (0, import_jsx_runtime66.jsx)("span", { className: classes6.dot }),
  (0, import_jsx_runtime66.jsx)("span", { className: classes6.dot })
] }));

// node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var import_react147 = __toESM(require_react(), 1);
var Oval = (0, import_react147.forwardRef)(({ className, ...others }, ref) => (0, import_jsx_runtime67.jsx)(Box, { component: "span", className: clsx_default(classes6.ovalLoader, className), ...others, ref }));

// node_modules/@mantine/core/esm/components/Loader/Loader.mjs
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps11 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver4 = createVarsResolver((theme, { size: size4, color }) => ({
  root: {
    "--loader-size": getSize(size4, "loader-size"),
    "--loader-color": color ? getThemeColor(color, theme) : void 0
  }
}));
var Loader = factory((_props, ref) => {
  const props = useProps("Loader", defaultProps11, _props);
  const {
    size: size4,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Loader",
    props,
    classes: classes6,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  if (children) {
    return (0, import_jsx_runtime68.jsx)(Box, { ...getStyles2("root"), ref, ...others, children });
  }
  return (0, import_jsx_runtime68.jsx)(
    Box,
    {
      ...getStyles2("root"),
      ref,
      component: loaders[type],
      variant,
      size: size4,
      ...others
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes6;
Loader.displayName = "@mantine/core/Loader";

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroup/ActionIconGroup.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var import_react149 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.module.css.mjs
var classes7 = { "root": "m_8d3f4000", "icon": "m_8d3afb97", "loader": "m_302b9fb1", "group": "m_1a0f1b21" };

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIconGroup/ActionIconGroup.mjs
var defaultProps12 = {
  orientation: "horizontal"
};
var varsResolver5 = createVarsResolver((_, { borderWidth }) => ({
  group: { "--ai-border-width": rem(borderWidth) }
}));
var ActionIconGroup = factory((_props, ref) => {
  const props = useProps("ActionIconGroup", defaultProps12, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps("ActionIconGroup", defaultProps12, _props);
  const getStyles2 = useStyles({
    name: "ActionIconGroup",
    props,
    classes: classes7,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5,
    rootSelector: "group"
  });
  return (0, import_jsx_runtime69.jsx)(
    Box,
    {
      ...getStyles2("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ActionIconGroup.classes = classes7;
ActionIconGroup.displayName = "@mantine/core/ActionIconGroup";

// node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs
var defaultProps13 = {};
var varsResolver6 = createVarsResolver(
  (theme, { size: size4, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--ai-size": getSize(size4, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-hover-color": color || variant ? colors.hoverColor : void 0,
        "--ai-color": colors.color,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = polymorphicFactory((_props, ref) => {
  const props = useProps("ActionIcon", defaultProps13, _props);
  const {
    className,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    loading,
    loaderProps,
    size: size4,
    color,
    radius,
    __staticSelector,
    gradient,
    vars,
    children,
    disabled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["ActionIcon", __staticSelector],
    props,
    className,
    style,
    classes: classes7,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  return (0, import_jsx_runtime70.jsxs)(
    UnstyledButton,
    {
      ...getStyles2("root", { active: !disabled && !loading && !dataDisabled }),
      ...others,
      unstyled,
      variant,
      size: size4,
      disabled: disabled || loading,
      ref,
      mod: [{ loading, disabled: disabled || dataDisabled }, mod],
      children: [
        (0, import_jsx_runtime70.jsx)(Transition, { mounted: !!loading, transition: "slide-down", duration: 150, children: (transitionStyles) => (0, import_jsx_runtime70.jsx)(Box, { component: "span", ...getStyles2("loader", { style: transitionStyles }), "aria-hidden": true, children: (0, import_jsx_runtime70.jsx)(Loader, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...loaderProps }) }) }),
        (0, import_jsx_runtime70.jsx)(Box, { component: "span", mod: { loading }, ...getStyles2("icon"), children })
      ]
    }
  );
});
ActionIcon.classes = classes7;
ActionIcon.displayName = "@mantine/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;

// node_modules/@mantine/core/esm/components/CloseButton/CloseIcon.mjs
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react151 = __toESM(require_react(), 1);
var CloseIcon = (0, import_react151.forwardRef)(
  ({ size: size4 = "var(--cb-icon-size, 70%)", style, ...others }, ref) => (0, import_jsx_runtime71.jsx)(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: size4, height: size4 },
      ref,
      ...others,
      children: (0, import_jsx_runtime71.jsx)(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
CloseIcon.displayName = "@mantine/core/CloseIcon";

// node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var import_react152 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/CloseButton/CloseButton.module.css.mjs
var classes8 = { "root": "m_86a44da5", "root--subtle": "m_220c80f2" };

// node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
var defaultProps14 = {
  variant: "subtle"
};
var varsResolver7 = createVarsResolver((_, { size: size4, radius, iconSize }) => ({
  root: {
    "--cb-size": getSize(size4, "cb-size"),
    "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--cb-icon-size": rem(iconSize)
  }
}));
var CloseButton = polymorphicFactory((_props, ref) => {
  const props = useProps("CloseButton", defaultProps14, _props);
  const {
    iconSize,
    children,
    vars,
    radius,
    className,
    classNames,
    style,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    disabled,
    variant,
    icon,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "CloseButton",
    props,
    className,
    style,
    classes: classes8,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  return (0, import_jsx_runtime72.jsxs)(
    UnstyledButton,
    {
      ref,
      ...others,
      unstyled,
      variant,
      disabled,
      mod: [{ disabled: disabled || dataDisabled }, mod],
      ...getStyles2("root", { variant, active: !disabled && !dataDisabled }),
      children: [
        icon || (0, import_jsx_runtime72.jsx)(CloseIcon, {}),
        children
      ]
    }
  );
});
CloseButton.classes = classes8;
CloseButton.displayName = "@mantine/core/CloseButton";

// node_modules/@mantine/core/esm/components/Group/Group.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var import_react154 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs
var import_react153 = __toESM(require_react(), 1);
function filterFalsyChildren(children) {
  return import_react153.Children.toArray(children).filter(Boolean);
}

// node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs
var classes9 = { "root": "m_4081bf90" };

// node_modules/@mantine/core/esm/components/Group/Group.mjs
var defaultProps15 = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver8 = createVarsResolver(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": getSpacing(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = factory((_props, ref) => {
  const props = useProps("Group", defaultProps15, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size,
    mod,
    ...others
  } = props;
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = getSpacing(gap ?? "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles2 = useStyles({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: classes9,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8
  });
  return (0, import_jsx_runtime73.jsx)(
    Box,
    {
      ...getStyles2("root"),
      ref,
      variant,
      mod: [{ grow }, mod],
      size: __size,
      ...others,
      children: filteredChildren
    }
  );
});
Group.classes = classes9;
Group.displayName = "@mantine/core/Group";

// node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var import_react155 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Overlay/Overlay.module.css.mjs
var classes10 = { "root": "m_9814e45f" };

// node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs
var defaultProps16 = {
  zIndex: getDefaultZIndex("modal")
};
var varsResolver9 = createVarsResolver(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && rgba(color || "#000", backgroundOpacity ?? 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${rem(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = polymorphicFactory((_props, ref) => {
  const props = useProps("Overlay", defaultProps16, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Overlay",
    props,
    classes: classes10,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver9
  });
  return (0, import_jsx_runtime74.jsx)(Box, { ref, ...getStyles2("root"), mod: [{ center, fixed }, mod], ...others, children });
});
Overlay.classes = classes10;
Overlay.displayName = "@mantine/core/Overlay";

// node_modules/@mantine/core/esm/components/ModalBase/ModalBase.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var import_react159 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs
var import_react156 = __toESM(require_react(), 1);
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// node_modules/@mantine/core/esm/components/ModalBase/use-modal.mjs
var import_react158 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ModalBase/use-lock-scroll.mjs
var import_react157 = __toESM(require_react(), 1);
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = (0, import_react157.useState)(opened);
  const timeout = (0, import_react157.useRef)();
  const reduceMotion = useReducedMotion();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  (0, import_react157.useEffect)(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(() => setShouldLockScroll(false), _transitionDuration);
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}

// node_modules/@mantine/core/esm/components/ModalBase/use-modal.mjs
function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape: closeOnEscape2,
  onClose,
  returnFocus
}) {
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = (0, import_react158.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react158.useState)(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent(
    "keydown",
    (event) => {
      var _a;
      if (event.key === "Escape" && closeOnEscape2 && opened) {
        const shouldTrigger = ((_a = event.target) == null ? void 0 : _a.getAttribute("data-mantine-stop-propagation")) !== "true";
        shouldTrigger && onClose();
      }
    },
    { capture: true }
  );
  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

// node_modules/@mantine/core/esm/components/ModalBase/ModalBase.mjs
var ModalBase = (0, import_react159.forwardRef)(
  ({
    keepMounted,
    opened,
    onClose,
    id,
    transitionProps,
    trapFocus,
    closeOnEscape: closeOnEscape2,
    returnFocus,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    lockScroll,
    children,
    zIndex,
    shadow,
    padding,
    __vars,
    unstyled,
    removeScrollProps,
    ...others
  }, ref) => {
    const { _id, titleMounted, bodyMounted, shouldLockScroll, setTitleMounted, setBodyMounted } = useModal({ id, transitionProps, opened, trapFocus, closeOnEscape: closeOnEscape2, onClose, returnFocus });
    const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};
    return (0, import_jsx_runtime76.jsx)(OptionalPortal, { ...portalProps, withinPortal, children: (0, import_jsx_runtime76.jsx)(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: { ...transitionProps, keepMounted },
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape: closeOnEscape2,
          zIndex,
          unstyled
        },
        children: (0, import_jsx_runtime76.jsx)(
          Combination_default,
          {
            enabled: shouldLockScroll && lockScroll,
            ...otherRemoveScrollProps,
            children: (0, import_jsx_runtime76.jsx)(
              Box,
              {
                ref,
                ...others,
                __vars: {
                  ...__vars,
                  "--mb-z-index": (zIndex || getDefaultZIndex("modal")).toString(),
                  "--mb-shadow": getShadow(shadow),
                  "--mb-padding": getSpacing(padding)
                },
                children
              }
            )
          },
          removeScrollKey
        )
      }
    ) });
  }
);

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseBody.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var import_react161 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ModalBase/use-modal-body-id.mjs
var import_react160 = __toESM(require_react(), 1);
function useModalBodyId() {
  const ctx = useModalBaseContext();
  (0, import_react160.useEffect)(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs
var classes11 = { "title": "m_615af6c9", "header": "m_b5489c3c", "inner": "m_60c222c7", "content": "m_fd1ab0aa", "close": "m_606cb269", "body": "m_5df29311" };

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseBody.mjs
var ModalBaseBody = (0, import_react161.forwardRef)(
  ({ className, ...others }, ref) => {
    const bodyId = useModalBodyId();
    const ctx = useModalBaseContext();
    return (0, import_jsx_runtime77.jsx)(
      Box,
      {
        ref,
        ...others,
        id: bodyId,
        className: clsx_default({ [classes11.body]: !ctx.unstyled }, className)
      }
    );
  }
);
ModalBaseBody.displayName = "@mantine/core/ModalBaseBody";

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseCloseButton.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var import_react162 = __toESM(require_react(), 1);
var ModalBaseCloseButton = (0, import_react162.forwardRef)(
  ({ className, onClick, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (0, import_jsx_runtime78.jsx)(
      CloseButton,
      {
        ref,
        ...others,
        onClick: (event) => {
          ctx.onClose();
          onClick == null ? void 0 : onClick(event);
        },
        className: clsx_default({ [classes11.close]: !ctx.unstyled }, className),
        unstyled: ctx.unstyled
      }
    );
  }
);
ModalBaseCloseButton.displayName = "@mantine/core/ModalBaseCloseButton";

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseContent.mjs
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var import_react163 = __toESM(require_react(), 1);
var ModalBaseContent = (0, import_react163.forwardRef)(
  ({ transitionProps, className, innerProps, onKeyDown, style, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (0, import_jsx_runtime79.jsx)(
      Transition,
      {
        mounted: ctx.opened,
        transition: "pop",
        ...ctx.transitionProps,
        ...transitionProps,
        children: (transitionStyles) => (0, import_jsx_runtime79.jsx)(
          "div",
          {
            ...innerProps,
            className: clsx_default({ [classes11.inner]: !ctx.unstyled }, innerProps.className),
            children: (0, import_jsx_runtime79.jsx)(FocusTrap, { active: ctx.opened && ctx.trapFocus, children: (0, import_jsx_runtime79.jsx)(
              Paper,
              {
                ...others,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": true,
                "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
                "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
                ref,
                style: [style, transitionStyles],
                className: clsx_default({ [classes11.content]: !ctx.unstyled }, className),
                unstyled: ctx.unstyled,
                children: others.children
              }
            ) })
          }
        )
      }
    );
  }
);

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseHeader.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var import_react164 = __toESM(require_react(), 1);
var ModalBaseHeader = (0, import_react164.forwardRef)(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (0, import_jsx_runtime80.jsx)(
      Box,
      {
        component: "header",
        ref,
        className: clsx_default({ [classes11.header]: !ctx.unstyled }, className),
        ...others
      }
    );
  }
);
ModalBaseHeader.displayName = "@mantine/core/ModalBaseHeader";

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseOverlay.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var import_react165 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ModalBase/use-modal-transition.mjs
var DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return { ...DEFAULT_TRANSITION, ...ctx.transitionProps, ...transitionOverride };
}

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseOverlay.mjs
var ModalBaseOverlay = (0, import_react165.forwardRef)(
  ({ onClick, transitionProps, style, ...others }, ref) => {
    const ctx = useModalBaseContext();
    const transition = useModalTransition(transitionProps);
    return (0, import_jsx_runtime81.jsx)(Transition, { mounted: ctx.opened, ...transition, transition: "fade", children: (transitionStyles) => (0, import_jsx_runtime81.jsx)(
      Overlay,
      {
        ref,
        fixed: true,
        style: [style, transitionStyles],
        zIndex: ctx.zIndex,
        unstyled: ctx.unstyled,
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          ctx.closeOnClickOutside && ctx.onClose();
        },
        ...others
      }
    ) });
  }
);
ModalBaseOverlay.displayName = "@mantine/core/ModalBaseOverlay";

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseTitle.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var import_react167 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ModalBase/use-modal-title-id.mjs
var import_react166 = __toESM(require_react(), 1);
function useModalTitle() {
  const ctx = useModalBaseContext();
  (0, import_react166.useEffect)(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// node_modules/@mantine/core/esm/components/ModalBase/ModalBaseTitle.mjs
var ModalBaseTitle = (0, import_react167.forwardRef)(
  ({ className, ...others }, ref) => {
    const id = useModalTitle();
    const ctx = useModalBaseContext();
    return (0, import_jsx_runtime82.jsx)(
      Box,
      {
        component: "h2",
        ref,
        className: clsx_default({ [classes11.title]: !ctx.unstyled }, className),
        ...others,
        id
      }
    );
  }
);
ModalBaseTitle.displayName = "@mantine/core/ModalBaseTitle";

// node_modules/@mantine/core/esm/components/ModalBase/NativeScrollArea.mjs
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
function NativeScrollArea({ children }) {
  return (0, import_jsx_runtime83.jsx)(import_jsx_runtime83.Fragment, { children });
}

// node_modules/@mantine/core/esm/components/Input/Input.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var import_react174 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var import_react169 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs
var import_react168 = __toESM(require_react(), 1);
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs
var classes12 = { "wrapper": "m_6c018570", "input": "m_8fb7ebe7", "section": "m_82577fc2", "placeholder": "m_88bacfd0", "root": "m_46b77525", "label": "m_8fdc1311", "required": "m_78a94662", "error": "m_8f816625", "description": "m_fe47ce59" };

// node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
var defaultProps17 = {};
var varsResolver10 = createVarsResolver((_, { size: size4 }) => ({
  description: {
    "--input-description-size": size4 === void 0 ? void 0 : `calc(${getFontSize(size4)} - ${rem(2)})`
  }
}));
var InputDescription = factory((_props, ref) => {
  const props = useProps("InputDescription", defaultProps17, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size4,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = useProps("InputDescription", defaultProps17, props);
  const ctx = useInputWrapperContext();
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "description",
    vars,
    varsResolver: varsResolver10
  });
  const getStyles2 = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return (0, import_jsx_runtime85.jsx)(
    Box,
    {
      component: "p",
      ref,
      variant,
      size: size4,
      ...getStyles2("description", (ctx == null ? void 0 : ctx.getStyles) ? { className, style } : void 0),
      ...others
    }
  );
});
InputDescription.classes = classes12;
InputDescription.displayName = "@mantine/core/InputDescription";

// node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var import_react170 = __toESM(require_react(), 1);
var defaultProps18 = {};
var varsResolver11 = createVarsResolver((_, { size: size4 }) => ({
  error: {
    "--input-error-size": size4 === void 0 ? void 0 : `calc(${getFontSize(size4)} - ${rem(2)})`
  }
}));
var InputError = factory((_props, ref) => {
  const props = useProps("InputError", defaultProps18, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size4,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = props;
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver11
  });
  const ctx = useInputWrapperContext();
  const getStyles2 = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return (0, import_jsx_runtime86.jsx)(
    Box,
    {
      component: "p",
      ref,
      variant,
      size: size4,
      ...getStyles2("error", (ctx == null ? void 0 : ctx.getStyles) ? { className, style } : void 0),
      ...others
    }
  );
});
InputError.classes = classes12;
InputError.displayName = "@mantine/core/InputError";

// node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var import_react171 = __toESM(require_react(), 1);
var defaultProps19 = {
  labelElement: "label"
};
var varsResolver12 = createVarsResolver((_, { size: size4 }) => ({
  label: {
    "--input-label-size": getFontSize(size4),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory((_props, ref) => {
  const props = useProps("InputLabel", defaultProps19, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size: size4,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    ...others
  } = useProps("InputLabel", defaultProps19, props);
  const _getStyles = useStyles({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver12
  });
  const ctx = useInputWrapperContext();
  const getStyles2 = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return (0, import_jsx_runtime87.jsxs)(
    Box,
    {
      ...getStyles2("label", (ctx == null ? void 0 : ctx.getStyles) ? { className, style } : void 0),
      component: labelElement,
      variant,
      size: size4,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: [{ required }, mod],
      onMouseDown: (event) => {
        onMouseDown == null ? void 0 : onMouseDown(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      },
      ...others,
      children: [
        children,
        required && (0, import_jsx_runtime87.jsx)("span", { ...getStyles2("required"), "aria-hidden": true, children: " *" })
      ]
    }
  );
});
InputLabel.classes = classes12;
InputLabel.displayName = "@mantine/core/InputLabel";

// node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var import_react172 = __toESM(require_react(), 1);
var defaultProps20 = {};
var InputPlaceholder = factory((_props, ref) => {
  const props = useProps("InputPlaceholder", defaultProps20, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    error: error2,
    mod,
    ...others
  } = useProps("InputPlaceholder", defaultProps20, props);
  const getStyles2 = useStyles({
    name: ["InputPlaceholder", __staticSelector],
    props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "placeholder"
  });
  return (0, import_jsx_runtime88.jsx)(
    Box,
    {
      ...getStyles2("placeholder"),
      mod: [{ error: !!error2 }, mod],
      component: "span",
      variant,
      ref,
      ...others
    }
  );
});
InputPlaceholder.classes = classes12;
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";

// node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var import_react173 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder.slice(0, inputIndex);
  const belowInput = inputWrapperOrder.slice(inputIndex + 1);
  const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
  const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
  return { offsetBottom, offsetTop };
}

// node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
var defaultProps21 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver13 = createVarsResolver((_, { size: size4 }) => ({
  label: {
    "--input-label-size": getFontSize(size4),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size4 === void 0 ? void 0 : `calc(${getFontSize(size4)} - ${rem(2)})`
  },
  description: {
    "--input-description-size": size4 === void 0 ? void 0 : `calc(${getFontSize(size4)} - ${rem(2)})`
  }
}));
var InputWrapper = factory((_props, ref) => {
  const props = useProps("InputWrapper", defaultProps21, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size4,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error: error2,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver13
  });
  const sharedProps = {
    size: size4,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error2 && typeof error2 !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && (0, import_jsx_runtime89.jsx)(
    InputLabel,
    {
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired,
      ...sharedProps,
      ...labelProps,
      children: label
    },
    "label"
  );
  const _description = hasDescription && (0, import_jsx_runtime89.jsx)(
    InputDescription,
    {
      ...descriptionProps,
      ...sharedProps,
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId,
      children: description
    },
    "description"
  );
  const _input = (0, import_jsx_runtime89.jsx)(import_react173.Fragment, { children: inputContainer(children) }, "input");
  const _error = hasError && (0, import_react173.createElement)(
    InputError,
    {
      ...errorProps,
      ...sharedProps,
      size: (errorProps == null ? void 0 : errorProps.size) || sharedProps.size,
      key: "error",
      id: (errorProps == null ? void 0 : errorProps.id) || errorId
    },
    error2
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return (0, import_jsx_runtime89.jsx)(
    InputWrapperProvider,
    {
      value: {
        getStyles: getStyles2,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError })
      },
      children: (0, import_jsx_runtime89.jsx)(
        Box,
        {
          ref,
          variant,
          size: size4,
          mod: [{ error: !!error2 }, mod],
          ...getStyles2("root"),
          ...others,
          children: content
        }
      )
    }
  );
});
InputWrapper.classes = classes12;
InputWrapper.displayName = "@mantine/core/InputWrapper";

// node_modules/@mantine/core/esm/components/Input/Input.mjs
var defaultProps22 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver14 = createVarsResolver((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": getSize(props.size, "input-height"),
    "--input-fz": getFontSize(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory((_props, ref) => {
  const props = useProps("Input", defaultProps22, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size: size4,
    wrapperProps,
    error: error2,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles,
    mod,
    inputSize,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = { offsetBottom: ctx == null ? void 0 : ctx.offsetBottom, offsetTop: ctx == null ? void 0 : ctx.offsetTop };
  const getStyles2 = useStyles({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes12,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver14
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error2,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return (0, import_jsx_runtime90.jsxs)(
    Box,
    {
      ...getStyles2("wrapper"),
      ...styleProps,
      ...wrapperProps,
      mod: [
        {
          error: !!error2 && withErrorStyles,
          pointer,
          disabled,
          multiline,
          "data-with-right-section": !!rightSection,
          "data-with-left-section": !!leftSection
        },
        mod
      ],
      variant,
      size: size4,
      children: [
        leftSection && (0, import_jsx_runtime90.jsx)(
          "div",
          {
            ...leftSectionProps,
            "data-position": "left",
            ...getStyles2("section", {
              className: leftSectionProps == null ? void 0 : leftSectionProps.className,
              style: leftSectionProps == null ? void 0 : leftSectionProps.style
            }),
            children: leftSection
          }
        ),
        (0, import_jsx_runtime90.jsx)(
          Box,
          {
            component: "input",
            ...rest,
            ...ariaAttributes,
            ref,
            required,
            mod: { disabled, error: !!error2 && withErrorStyles },
            variant,
            __size: inputSize,
            ...getStyles2("input")
          }
        ),
        rightSection && (0, import_jsx_runtime90.jsx)(
          "div",
          {
            ...rightSectionProps,
            "data-position": "right",
            ...getStyles2("section", {
              className: rightSectionProps == null ? void 0 : rightSectionProps.className,
              style: rightSectionProps == null ? void 0 : rightSectionProps.style
            }),
            children: rightSection
          }
        )
      ]
    }
  );
});
Input.classes = classes12;
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = "@mantine/core/Input";

// node_modules/@mantine/core/esm/components/Input/use-input-props.mjs
var import_react175 = __toESM(require_react(), 1);
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
function useInputProps(component, defaultProps180, _props) {
  const props = useProps(component, defaultProps180, _props);
  const {
    label,
    description,
    error: error2,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size: size4,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars,
    mod,
    ...others
  } = props;
  const { styleProps, rest } = extractStyleProps(others);
  const wrapperProps = {
    label,
    description,
    error: error2,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    size: size4,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id,
    mod,
    ..._wrapperProps
  };
  return {
    ...rest,
    classNames,
    styles,
    unstyled,
    wrapperProps: { ...wrapperProps, ...styleProps },
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      size: size4,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error: error2,
      variant,
      id
    }
  };
}

// node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var import_react176 = __toESM(require_react(), 1);
var defaultProps23 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = polymorphicFactory((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps("InputBase", defaultProps23, props);
  return (0, import_jsx_runtime92.jsx)(Input.Wrapper, { ...wrapperProps, children: (0, import_jsx_runtime92.jsx)(Input, { ...inputProps, ...others, ref }) });
});
InputBase.classes = { ...Input.classes, ...Input.Wrapper.classes };
InputBase.displayName = "@mantine/core/InputBase";

// node_modules/@mantine/core/esm/components/Flex/flex-props.mjs
var FLEX_STYLE_PROPS_DATA = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};

// node_modules/@mantine/core/esm/components/Flex/Flex.mjs
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var import_react177 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Flex/Flex.module.css.mjs
var classes13 = { "root": "m_8bffd616" };

// node_modules/@mantine/core/esm/components/Flex/Flex.mjs
var defaultProps24 = {};
var Flex = polymorphicFactory((_props, ref) => {
  const props = useProps("Flex", defaultProps24, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Flex",
    classes: classes13,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const theme = useMantineTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA
  });
  return (0, import_jsx_runtime93.jsxs)(import_jsx_runtime93.Fragment, { children: [
    parsedStyleProps.hasResponsiveStyles && (0, import_jsx_runtime93.jsx)(
      InlineStyles,
      {
        selector: `.${responsiveClassName}`,
        styles: parsedStyleProps.styles,
        media: parsedStyleProps.media
      }
    ),
    (0, import_jsx_runtime93.jsx)(
      Box,
      {
        ref,
        ...getStyles2("root", {
          className: responsiveClassName,
          style: filterProps(parsedStyleProps.inlineStyles)
        }),
        ...others
      }
    )
  ] });
});
Flex.classes = classes13;
Flex.displayName = "@mantine/core/Flex";

// node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var import_react179 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/FloatingIndicator/use-floating-indicator.mjs
var import_react178 = __toESM(require_react(), 1);
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
function isParent(parentElement, childElement) {
  if (!childElement || !parentElement) {
    return false;
  }
  let parent = childElement.parentNode;
  while (parent != null) {
    if (parent === parentElement) {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}
function useFloatingIndicator({
  target,
  parent,
  ref,
  displayAfterTransitionEnd
}) {
  const transitionTimeout = (0, import_react178.useRef)();
  const [initialized, setInitialized] = (0, import_react178.useState)(false);
  const [hidden2, setHidden] = (0, import_react178.useState)(
    typeof displayAfterTransitionEnd === "boolean" ? displayAfterTransitionEnd : false
  );
  const updatePosition = () => {
    if (!target || !parent) {
      return;
    }
    const targetRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const position = {
      top: targetRect.top - parentRect.top,
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      height: targetRect.height
    };
    if (ref.current) {
      ref.current.style.transform = `translateY(${position.top}px) translateX(${position.left}px)`;
      ref.current.style.width = `${position.width}px`;
      ref.current.style.height = `${position.height}px`;
    }
  };
  const updatePositionWithoutAnimation = () => {
    window.clearTimeout(transitionTimeout.current);
    if (ref.current) {
      ref.current.style.transitionDuration = "0ms";
    }
    updatePosition();
    transitionTimeout.current = window.setTimeout(() => {
      if (ref.current) {
        ref.current.style.transitionDuration = "";
      }
    }, 30);
  };
  const targetResizeObserver = (0, import_react178.useRef)();
  const parentResizeObserver = (0, import_react178.useRef)();
  (0, import_react178.useEffect)(() => {
    updatePosition();
    if (target) {
      targetResizeObserver.current = new ResizeObserver(updatePositionWithoutAnimation);
      targetResizeObserver.current.observe(target);
      if (parent) {
        parentResizeObserver.current = new ResizeObserver(updatePositionWithoutAnimation);
        parentResizeObserver.current.observe(parent);
      }
      return () => {
        var _a, _b;
        (_a = targetResizeObserver.current) == null ? void 0 : _a.disconnect();
        (_b = parentResizeObserver.current) == null ? void 0 : _b.disconnect();
      };
    }
    return void 0;
  }, [parent, target]);
  (0, import_react178.useEffect)(() => {
    if (parent) {
      const handleTransitionEnd = (event) => {
        if (isParent(event.target, parent)) {
          updatePositionWithoutAnimation();
          setHidden(false);
        }
      };
      document.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        document.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
    return void 0;
  }, [parent]);
  useTimeout(
    () => {
      if (getEnv() !== "test") {
        setInitialized(true);
      }
    },
    20,
    { autoInvoke: true }
  );
  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "dir") {
          updatePositionWithoutAnimation();
        }
      });
    },
    { attributes: true, attributeFilter: ["dir"] },
    () => document.documentElement
  );
  return { initialized, hidden: hidden2 };
}

// node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.module.css.mjs
var classes14 = { "root": "m_96b553a6" };

// node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.mjs
var defaultProps25 = {};
var varsResolver15 = createVarsResolver(
  (_theme, { transitionDuration }) => ({
    root: {
      "--transition-duration": typeof transitionDuration === "number" ? `${transitionDuration}ms` : transitionDuration
    }
  })
);
var FloatingIndicator = factory((_props, ref) => {
  const props = useProps("FloatingIndicator", defaultProps25, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    target,
    parent,
    transitionDuration,
    mod,
    displayAfterTransitionEnd,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "FloatingIndicator",
    classes: classes14,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver15
  });
  const innerRef = (0, import_react179.useRef)(null);
  const { initialized, hidden: hidden2 } = useFloatingIndicator({
    target,
    parent,
    ref: innerRef,
    displayAfterTransitionEnd
  });
  const mergedRef = useMergedRef(ref, innerRef);
  if (!target || !parent) {
    return null;
  }
  return (0, import_jsx_runtime95.jsx)(Box, { ref: mergedRef, mod: [{ initialized, hidden: hidden2 }, mod], ...getStyles2("root"), ...others });
});
FloatingIndicator.displayName = "@mantine/core/FloatingIndicator";
FloatingIndicator.classes = classes14;

// node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
var import_react186 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Accordion/Accordion.context.mjs
var import_react180 = __toESM(require_react(), 1);
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var [AccordionProvider, useAccordionContext] = createSafeContext(
  "Accordion component was not found in the tree"
);

// node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var import_react181 = __toESM(require_react(), 1);
function AccordionChevron({ style, size: size4 = 16, ...others }) {
  return (0, import_jsx_runtime97.jsx)(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: rem(size4), height: rem(size4), display: "block" },
      ...others,
      children: (0, import_jsx_runtime97.jsx)(
        "path",
        {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
AccordionChevron.displayName = "@mantine/core/AccordionChevron";

// node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var import_react183 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Accordion/AccordionItem.context.mjs
var import_react182 = __toESM(require_react(), 1);
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var [AccordionItemProvider, useAccordionItemContext] = createSafeContext("Accordion.Item component was not found in the tree");

// node_modules/@mantine/core/esm/components/Accordion/Accordion.module.css.mjs
var classes15 = { "root": "m_9bdbb667", "panel": "m_df78851f", "content": "m_4ba554d4", "itemTitle": "m_8fa820a0", "control": "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", "label": "m_df3ffa0f", "chevron": "m_3f35ae96", "icon": "m_9bd771fe", "item": "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };

// node_modules/@mantine/core/esm/components/Accordion/AccordionControl/AccordionControl.mjs
var defaultProps26 = {};
var AccordionControl = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    chevron,
    icon,
    onClick,
    onKeyDown,
    children,
    disabled,
    mod,
    ...others
  } = useProps("AccordionControl", defaultProps26, props);
  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  const isActive = ctx.isItemActive(value);
  const shouldWrapWithHeading = typeof ctx.order === "number";
  const Heading = `h${ctx.order}`;
  const content = (0, import_jsx_runtime99.jsxs)(
    UnstyledButton,
    {
      ...others,
      ...ctx.getStyles("control", { className, classNames, style, styles, variant: ctx.variant }),
      unstyled: ctx.unstyled,
      mod: [
        "accordion-control",
        { active: isActive, "chevron-position": ctx.chevronPosition, disabled },
        mod
      ],
      ref,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.onChange(value);
      },
      type: "button",
      disabled,
      "aria-expanded": isActive,
      "aria-controls": ctx.getRegionId(value),
      id: ctx.getControlId(value),
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: false,
        loop: ctx.loop,
        orientation: "vertical",
        onKeyDown
      }),
      children: [
        (0, import_jsx_runtime99.jsx)(
          Box,
          {
            component: "span",
            mod: { rotate: !ctx.disableChevronRotation && isActive, position: ctx.chevronPosition },
            ...ctx.getStyles("chevron", { classNames, styles }),
            children: chevron || ctx.chevron
          }
        ),
        (0, import_jsx_runtime99.jsx)("span", { ...ctx.getStyles("label", { classNames, styles }), children }),
        icon && (0, import_jsx_runtime99.jsx)(
          Box,
          {
            component: "span",
            mod: { "chevron-position": ctx.chevronPosition },
            ...ctx.getStyles("icon", { classNames, styles }),
            children: icon
          }
        )
      ]
    }
  );
  return shouldWrapWithHeading ? (0, import_jsx_runtime99.jsx)(Heading, { ...ctx.getStyles("itemTitle", { classNames, styles }), children: content }) : content;
});
AccordionControl.displayName = "@mantine/core/AccordionControl";
AccordionControl.classes = classes15;

// node_modules/@mantine/core/esm/components/Accordion/AccordionItem/AccordionItem.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var import_react184 = __toESM(require_react(), 1);
var defaultProps27 = {};
var AccordionItem = factory((props, ref) => {
  const { classNames, className, style, styles, vars, value, mod, ...others } = useProps(
    "AccordionItem",
    defaultProps27,
    props
  );
  const ctx = useAccordionContext();
  return (0, import_jsx_runtime100.jsx)(AccordionItemProvider, { value: { value }, children: (0, import_jsx_runtime100.jsx)(
    Box,
    {
      ref,
      mod: [{ active: ctx.isItemActive(value) }, mod],
      ...ctx.getStyles("item", { className, classNames, styles, style, variant: ctx.variant }),
      ...others
    }
  ) });
});
AccordionItem.displayName = "@mantine/core/AccordionItem";
AccordionItem.classes = classes15;

// node_modules/@mantine/core/esm/components/Accordion/AccordionPanel/AccordionPanel.mjs
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var import_react185 = __toESM(require_react(), 1);
var defaultProps28 = {};
var AccordionPanel = factory((props, ref) => {
  const { classNames, className, style, styles, vars, children, ...others } = useProps(
    "AccordionPanel",
    defaultProps28,
    props
  );
  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  return (0, import_jsx_runtime101.jsx)(
    Collapse,
    {
      ref,
      ...ctx.getStyles("panel", { className, classNames, style, styles }),
      ...others,
      in: ctx.isItemActive(value),
      transitionDuration: ctx.transitionDuration ?? 200,
      role: "region",
      id: ctx.getRegionId(value),
      "aria-labelledby": ctx.getControlId(value),
      children: (0, import_jsx_runtime101.jsx)("div", { ...ctx.getStyles("content", { classNames, styles }), children })
    }
  );
});
AccordionPanel.displayName = "@mantine/core/AccordionPanel";
AccordionPanel.classes = classes15;

// node_modules/@mantine/core/esm/components/Accordion/Accordion.mjs
var defaultProps29 = {
  multiple: false,
  disableChevronRotation: false,
  chevronPosition: "right",
  variant: "default",
  chevron: (0, import_jsx_runtime102.jsx)(AccordionChevron, {})
};
var varsResolver16 = createVarsResolver(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      "--accordion-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--accordion-chevron-size": chevronSize === void 0 ? void 0 : rem(chevronSize),
      "--accordion-radius": radius === void 0 ? void 0 : getRadius(radius)
    }
  })
);
function Accordion(_props) {
  const props = useProps("Accordion", defaultProps29, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius,
    ...others
  } = props;
  const uid = useId(id);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isItemActive = (itemValue) => Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;
  const handleItemChange = (itemValue) => {
    const nextValue = Array.isArray(_value) ? _value.includes(itemValue) ? _value.filter((selectedValue) => selectedValue !== itemValue) : [..._value, itemValue] : itemValue === _value ? null : itemValue;
    handleChange(nextValue);
  };
  const getStyles2 = useStyles({
    name: "Accordion",
    classes: classes15,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver16
  });
  return (0, import_jsx_runtime102.jsx)(
    AccordionProvider,
    {
      value: {
        isItemActive,
        onChange: handleItemChange,
        getControlId: getSafeId(
          `${uid}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: getSafeId(
          `${uid}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        chevron,
        loop,
        getStyles: getStyles2,
        variant,
        unstyled
      },
      children: (0, import_jsx_runtime102.jsx)(Box, { ...getStyles2("root"), id: uid, ...others, variant, "data-accordion": true, children })
    }
  );
}
var extendAccordion = (c) => c;
Accordion.extend = extendAccordion;
Accordion.classes = classes15;
Accordion.displayName = "@mantine/core/Accordion";
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;

// node_modules/@mantine/core/esm/components/Affix/Affix.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var import_react187 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Affix/Affix.module.css.mjs
var classes16 = { "root": "m_7f854edf" };

// node_modules/@mantine/core/esm/components/Affix/Affix.mjs
var defaultProps30 = {
  position: { bottom: 0, right: 0 },
  zIndex: getDefaultZIndex("modal"),
  withinPortal: true
};
var varsResolver17 = createVarsResolver((_, { zIndex, position }) => ({
  root: {
    "--affix-z-index": zIndex == null ? void 0 : zIndex.toString(),
    "--affix-top": rem(position == null ? void 0 : position.top),
    "--affix-left": rem(position == null ? void 0 : position.left),
    "--affix-bottom": rem(position == null ? void 0 : position.bottom),
    "--affix-right": rem(position == null ? void 0 : position.right)
  }
}));
var Affix = factory((_props, ref) => {
  const props = useProps("Affix", defaultProps30, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    portalProps,
    zIndex,
    withinPortal,
    position,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Affix",
    classes: classes16,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver17
  });
  return (0, import_jsx_runtime103.jsx)(OptionalPortal, { ...portalProps, withinPortal, children: (0, import_jsx_runtime103.jsx)(Box, { ref, ...getStyles2("root"), ...others }) });
});
Affix.classes = classes16;
Affix.displayName = "@mantine/core/Affix";

// node_modules/@mantine/core/esm/components/Alert/Alert.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var import_react188 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Alert/Alert.module.css.mjs
var classes17 = { "root": "m_66836ed3", "wrapper": "m_a5d60502", "body": "m_667c2793", "title": "m_6a03f287", "label": "m_698f4f23", "icon": "m_667f2a6a", "message": "m_7fa78076", "closeButton": "m_87f54839" };

// node_modules/@mantine/core/esm/components/Alert/Alert.mjs
var defaultProps31 = {};
var varsResolver18 = createVarsResolver(
  (theme, { radius, color, variant, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || "light",
      autoContrast
    });
    return {
      root: {
        "--alert-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--alert-bg": color || variant ? colors.background : void 0,
        "--alert-color": colors.color,
        "--alert-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Alert = factory((_props, ref) => {
  const props = useProps("Alert", defaultProps31, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    title,
    children,
    id,
    icon,
    withCloseButton,
    onClose,
    closeButtonLabel,
    variant,
    autoContrast,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Alert",
    classes: classes17,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver18
  });
  const rootId = useId(id);
  const titleId = title && `${rootId}-title` || void 0;
  const bodyId = `${rootId}-body`;
  return (0, import_jsx_runtime104.jsx)(
    Box,
    {
      id: rootId,
      ...getStyles2("root", { variant }),
      variant,
      ref,
      ...others,
      role: "alert",
      "aria-describedby": bodyId,
      "aria-labelledby": titleId,
      children: (0, import_jsx_runtime104.jsxs)("div", { ...getStyles2("wrapper"), children: [
        icon && (0, import_jsx_runtime104.jsx)("div", { ...getStyles2("icon"), children: icon }),
        (0, import_jsx_runtime104.jsxs)("div", { ...getStyles2("body"), children: [
          title && (0, import_jsx_runtime104.jsx)("div", { ...getStyles2("title"), "data-with-close-button": withCloseButton || void 0, children: (0, import_jsx_runtime104.jsx)("span", { id: titleId, ...getStyles2("label"), children: title }) }),
          children && (0, import_jsx_runtime104.jsx)("div", { id: bodyId, ...getStyles2("message"), "data-variant": variant, children })
        ] }),
        withCloseButton && (0, import_jsx_runtime104.jsx)(
          CloseButton,
          {
            ...getStyles2("closeButton"),
            onClick: onClose,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": closeButtonLabel,
            unstyled
          }
        )
      ] })
    }
  );
});
Alert.classes = classes17;
Alert.displayName = "@mantine/core/Alert";

// node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
var import_react190 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Text/Text.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
var import_react189 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs
var classes18 = { "root": "m_b6d8b162" };

// node_modules/@mantine/core/esm/components/Text/Text.mjs
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps32 = {
  inherit: false
};
var varsResolver19 = createVarsResolver(
  (theme, { variant, lineClamp, gradient, size: size4, color }) => ({
    root: {
      "--text-fz": getFontSize(size4),
      "--text-lh": getLineHeight(size4),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--text-color": color ? getThemeColor(color, theme) : void 0
    }
  })
);
var Text = polymorphicFactory((_props, ref) => {
  const props = useProps("Text", defaultProps32, _props);
  const {
    lineClamp,
    truncate,
    inline: inline4,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size: size4,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: ["Text", __staticSelector],
    props,
    classes: classes18,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver19
  });
  return (0, import_jsx_runtime105.jsx)(
    Box,
    {
      ...getStyles2("root", { focusable: true }),
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline4,
          "data-inherit": inherit
        },
        mod
      ],
      size: size4,
      ...others
    }
  );
});
Text.classes = classes18;
Text.displayName = "@mantine/core/Text";

// node_modules/@mantine/core/esm/components/Anchor/Anchor.module.css.mjs
var classes19 = { "root": "m_849cf0da" };

// node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs
var defaultProps33 = {
  underline: "hover"
};
var Anchor = polymorphicFactory((props, ref) => {
  const { underline, className, unstyled, mod, ...others } = useProps(
    "Anchor",
    defaultProps33,
    props
  );
  return (0, import_jsx_runtime106.jsx)(
    Text,
    {
      component: "a",
      ref,
      className: clsx_default({ [classes19.root]: !unstyled }, className),
      ...others,
      mod: [{ underline }, mod],
      __staticSelector: "Anchor",
      unstyled
    }
  );
});
Anchor.classes = classes19;
Anchor.displayName = "@mantine/core/Anchor";

// node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs
var import_jsx_runtime122 = __toESM(require_jsx_runtime(), 1);
var import_react207 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs
var import_react191 = __toESM(require_react(), 1);
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
var [AppShellProvider, useAppShellContext] = createSafeContext(
  "AppShell was not found in tree"
);

// node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var import_react192 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShell.module.css.mjs
var classes20 = { "root": "m_89ab340", "navbar": "m_45252eee", "aside": "m_9cdde9a", "header": "m_3b16f56b", "main": "m_8983817", "footer": "m_3840c879", "section": "m_6dcfc7c7" };

// node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs
var defaultProps34 = {};
var AppShellAside = factory((_props, ref) => {
  const props = useProps("AppShellAside", defaultProps34, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return (0, import_jsx_runtime108.jsx)(
    Box,
    {
      component: "aside",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("aside", { className, classNames, styles, style }),
      ...others,
      __vars: {
        "--app-shell-aside-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`
      }
    }
  );
});
AppShellAside.classes = classes20;
AppShellAside.displayName = "@mantine/core/AppShellAside";

// node_modules/@mantine/core/esm/components/AppShell/AppShellFooter/AppShellFooter.mjs
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);
var import_react193 = __toESM(require_react(), 1);
var defaultProps35 = {};
var AppShellFooter = factory((_props, ref) => {
  var _a;
  const props = useProps("AppShellFooter", defaultProps35, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return (0, import_jsx_runtime109.jsx)(
    Box,
    {
      component: "footer",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("footer", {
        className: clsx_default({ [Combination_default.classNames.zeroRight]: ctx.offsetScrollbars }, className),
        classNames,
        styles,
        style
      }),
      ...others,
      __vars: { "--app-shell-footer-z-index": (_a = zIndex ?? ctx.zIndex) == null ? void 0 : _a.toString() }
    }
  );
});
AppShellFooter.classes = classes20;
AppShellFooter.displayName = "@mantine/core/AppShellFooter";

// node_modules/@mantine/core/esm/components/AppShell/AppShellHeader/AppShellHeader.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);
var import_react194 = __toESM(require_react(), 1);
var defaultProps36 = {};
var AppShellHeader = factory((_props, ref) => {
  var _a;
  const props = useProps("AppShellHeader", defaultProps36, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return (0, import_jsx_runtime110.jsx)(
    Box,
    {
      component: "header",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("header", {
        className: clsx_default({ [Combination_default.classNames.zeroRight]: ctx.offsetScrollbars }, className),
        classNames,
        styles,
        style
      }),
      ...others,
      __vars: { "--app-shell-header-z-index": (_a = zIndex ?? ctx.zIndex) == null ? void 0 : _a.toString() }
    }
  );
});
AppShellHeader.classes = classes20;
AppShellHeader.displayName = "@mantine/core/AppShellHeader";

// node_modules/@mantine/core/esm/components/AppShell/AppShellMain/AppShellMain.mjs
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
var import_react195 = __toESM(require_react(), 1);
var defaultProps37 = {};
var AppShellMain = factory((_props, ref) => {
  const props = useProps("AppShellMain", defaultProps37, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useAppShellContext();
  return (0, import_jsx_runtime111.jsx)(
    Box,
    {
      component: "main",
      ref,
      ...ctx.getStyles("main", { className, style, classNames, styles }),
      ...others
    }
  );
});
AppShellMain.classes = classes20;
AppShellMain.displayName = "@mantine/core/AppShellMain";

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs
var import_jsx_runtime119 = __toESM(require_jsx_runtime(), 1);
var import_react203 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs
var import_react202 = __toESM(require_react(), 1);
var import_jsx_runtime118 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs
var import_react196 = __toESM(require_react(), 1);
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs
function getBaseSize(size4) {
  if (typeof size4 === "object") {
    return size4.base;
  }
  return size4;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs
function isPrimitiveSize(size4) {
  const isBaseSize = typeof size4 === "object" && size4 !== null && typeof size4.base !== "undefined" && Object.keys(size4).length === 1;
  return typeof size4 === "number" || typeof size4 === "string" || isBaseSize;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs
function isResponsiveSize(size4) {
  if (typeof size4 !== "object" || size4 === null) {
    return false;
  }
  if (Object.keys(size4).length === 1 && "base" in size4) {
    return false;
  }
  return true;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs
function assignAsideVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  aside,
  theme
}) {
  var _a, _b, _c;
  const asideWidth = aside == null ? void 0 : aside.width;
  const collapsedAsideTransform = "translateX(var(--app-shell-aside-width))";
  const collapsedAsideTransformRtl = "translateX(calc(var(--app-shell-aside-width) * -1))";
  if ((aside == null ? void 0 : aside.breakpoint) && !((_a = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint] = maxMediaStyles[aside == null ? void 0 : aside.breakpoint] || {};
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint]["--app-shell-aside-offset"] = "0px";
  }
  if (isPrimitiveSize(asideWidth)) {
    const baseSize = rem(getBaseSize(asideWidth));
    baseStyles["--app-shell-aside-width"] = baseSize;
    baseStyles["--app-shell-aside-offset"] = baseSize;
  }
  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== "undefined") {
      baseStyles["--app-shell-aside-width"] = rem(asideWidth.base);
      baseStyles["--app-shell-aside-offset"] = rem(asideWidth.base);
    }
    keys(asideWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-aside-width"] = rem(asideWidth[key]);
        minMediaStyles[key]["--app-shell-aside-offset"] = rem(asideWidth[key]);
      }
    });
  }
  if ((_b = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = aside.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    minMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px !important";
  }
  if ((_c = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = getBreakpointValue(aside.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.mjs
var import_react197 = __toESM(require_react(), 1);
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);
function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer
}) {
  const footerHeight = footer == null ? void 0 : footer.height;
  const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
  const shouldOffset = (footer == null ? void 0 : footer.offset) ?? true;
  if (isPrimitiveSize(footerHeight)) {
    const baseSize = rem(getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = rem(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = rem(footerHeight.base);
      }
    }
    keys(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = rem(footerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = rem(footerHeight[key]);
        }
      }
    });
  }
  if (footer == null ? void 0 : footer.collapsed) {
    baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
    baseStyles["--app-shell-footer-offset"] = "0px !important";
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-header-variables/assign-header-variables.mjs
var import_react198 = __toESM(require_react(), 1);
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header
}) {
  const headerHeight = header == null ? void 0 : header.height;
  const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
  const shouldOffset = (header == null ? void 0 : header.offset) ?? true;
  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = rem(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = rem(headerHeight.base);
      }
    }
    keys(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = rem(headerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = rem(headerHeight[key]);
        }
      }
    });
  }
  if (header == null ? void 0 : header.collapsed) {
    baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
    baseStyles["--app-shell-header-offset"] = "0px !important";
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-navbar-variables/assign-navbar-variables.mjs
var import_react199 = __toESM(require_react(), 1);
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme
}) {
  var _a, _b, _c;
  const navbarWidth = navbar == null ? void 0 : navbar.width;
  const collapsedNavbarTransform = "translateX(calc(var(--app-shell-navbar-width) * -1))";
  const collapsedNavbarTransformRtl = "translateX(var(--app-shell-navbar-width))";
  if ((navbar == null ? void 0 : navbar.breakpoint) && !((_a = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] = maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] || {};
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-offset"] = "0px";
  }
  if (isPrimitiveSize(navbarWidth)) {
    const baseSize = rem(getBaseSize(navbarWidth));
    baseStyles["--app-shell-navbar-width"] = baseSize;
    baseStyles["--app-shell-navbar-offset"] = baseSize;
  }
  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== "undefined") {
      baseStyles["--app-shell-navbar-width"] = rem(navbarWidth.base);
      baseStyles["--app-shell-navbar-offset"] = rem(navbarWidth.base);
    }
    keys(navbarWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-navbar-width"] = rem(navbarWidth[key]);
        minMediaStyles[key]["--app-shell-navbar-offset"] = rem(navbarWidth[key]);
      }
    });
  }
  if ((_b = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = navbar.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px !important";
  }
  if ((_c = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = getBreakpointValue(navbar.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs
var import_react201 = __toESM(require_react(), 1);
var import_jsx_runtime117 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-padding-value/get-padding-value.mjs
var import_react200 = __toESM(require_react(), 1);
var import_jsx_runtime116 = __toESM(require_jsx_runtime(), 1);
function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : getSpacing(padding);
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs
function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles
}) {
  if (isPrimitiveSize(padding)) {
    baseStyles["--app-shell-padding"] = getPaddingValue(getBaseSize(padding));
  }
  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles["--app-shell-padding"] = getPaddingValue(padding.base);
    }
    keys(padding).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-padding"] = getPaddingValue(padding[key]);
      }
    });
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs
function getVariables({ navbar, header, footer, aside, padding, theme }) {
  const minMediaStyles = {};
  const maxMediaStyles = {};
  const baseStyles = {};
  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme
  });
  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme
  });
  assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables({ baseStyles, minMediaStyles, padding });
  const minMedia = getSortedBreakpoints(keys(minMediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${em(breakpoint.px)})`,
    styles: minMediaStyles[breakpoint.value]
  }));
  const maxMedia = getSortedBreakpoints(keys(maxMediaStyles), theme).map((breakpoint) => ({
    query: `(max-width: ${em(breakpoint.px)})`,
    styles: maxMediaStyles[breakpoint.value]
  }));
  const media = [...minMedia, ...maxMedia];
  return { baseStyles, media };
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs
function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding
}) {
  const theme = useMantineTheme();
  const ctx = useMantineContext();
  const { media, baseStyles } = getVariables({ navbar, header, footer, aside, padding, theme });
  return (0, import_jsx_runtime119.jsx)(InlineStyles, { media, styles: baseStyles, selector: ctx.cssVariablesSelector });
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellNavbar/AppShellNavbar.mjs
var import_jsx_runtime120 = __toESM(require_jsx_runtime(), 1);
var import_react204 = __toESM(require_react(), 1);
var defaultProps38 = {};
var AppShellNavbar = factory((_props, ref) => {
  const props = useProps("AppShellNavbar", defaultProps38, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return (0, import_jsx_runtime120.jsx)(
    Box,
    {
      component: "nav",
      ref,
      mod: [{ "with-border": withBorder ?? ctx.withBorder }, mod],
      ...ctx.getStyles("navbar", { className, classNames, styles, style }),
      ...others,
      __vars: {
        "--app-shell-navbar-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`
      }
    }
  );
});
AppShellNavbar.classes = classes20;
AppShellNavbar.displayName = "@mantine/core/AppShellNavbar";

// node_modules/@mantine/core/esm/components/AppShell/AppShellSection/AppShellSection.mjs
var import_jsx_runtime121 = __toESM(require_jsx_runtime(), 1);
var import_react205 = __toESM(require_react(), 1);
var defaultProps39 = {};
var AppShellSection = polymorphicFactory((_props, ref) => {
  const props = useProps("AppShellSection", defaultProps39, _props);
  const { classNames, className, style, styles, vars, grow, mod, ...others } = props;
  const ctx = useAppShellContext();
  return (0, import_jsx_runtime121.jsx)(
    Box,
    {
      ref,
      mod: [{ grow }, mod],
      ...ctx.getStyles("section", { className, style, classNames, styles }),
      ...others
    }
  );
});
AppShellSection.classes = classes20;
AppShellSection.displayName = "@mantine/core/AppShellSection";

// node_modules/@mantine/core/esm/components/AppShell/use-resizing/use-resizing.mjs
var import_react206 = __toESM(require_react(), 1);
function useResizing({ transitionDuration, disabled }) {
  const [resizing, setResizing] = (0, import_react206.useState)(true);
  const resizingTimeout = (0, import_react206.useRef)();
  const disabledTimeout = (0, import_react206.useRef)();
  useWindowEvent("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  useIsomorphicEffect(() => {
    (0, import_react206.startTransition)(() => {
      setResizing(true);
      clearTimeout(disabledTimeout.current);
      disabledTimeout.current = window.setTimeout(
        () => setResizing(false),
        transitionDuration || 0
      );
    });
  }, [disabled, transitionDuration]);
  return resizing;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs
var defaultProps40 = {
  withBorder: true,
  offsetScrollbars: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: getDefaultZIndex("app")
};
var varsResolver20 = createVarsResolver(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
var AppShell = factory((_props, ref) => {
  const props = useProps("AppShell", defaultProps40, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer,
    offsetScrollbars,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "AppShell",
    classes: classes20,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver20
  });
  const resizing = useResizing({ disabled, transitionDuration });
  return (0, import_jsx_runtime122.jsxs)(AppShellProvider, { value: { getStyles: getStyles2, withBorder, zIndex, disabled, offsetScrollbars }, children: [
    (0, import_jsx_runtime122.jsx)(
      AppShellMediaStyles,
      {
        navbar,
        header,
        aside,
        footer,
        padding
      }
    ),
    (0, import_jsx_runtime122.jsx)(
      Box,
      {
        ref,
        ...getStyles2("root"),
        mod: [{ resizing, layout, disabled }, mod],
        ...others
      }
    )
  ] });
});
AppShell.classes = classes20;
AppShell.displayName = "@mantine/core/AppShell";
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;

// node_modules/@mantine/core/esm/components/AspectRatio/AspectRatio.mjs
var import_jsx_runtime123 = __toESM(require_jsx_runtime(), 1);
var import_react208 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AspectRatio/AspectRatio.module.css.mjs
var classes21 = { "root": "m_71ac47fc" };

// node_modules/@mantine/core/esm/components/AspectRatio/AspectRatio.mjs
var defaultProps41 = {};
var varsResolver21 = createVarsResolver((_, { ratio }) => ({
  root: {
    "--ar-ratio": ratio == null ? void 0 : ratio.toString()
  }
}));
var AspectRatio = factory((_props, ref) => {
  const props = useProps("AspectRatio", defaultProps41, _props);
  const { classNames, className, style, styles, unstyled, vars, ratio, ...others } = props;
  const getStyles2 = useStyles({
    name: "AspectRatio",
    classes: classes21,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver21
  });
  return (0, import_jsx_runtime123.jsx)(Box, { ref, ...getStyles2("root"), ...others });
});
AspectRatio.classes = classes21;
AspectRatio.displayName = "@mantine/core/AspectRatio";

// node_modules/@mantine/core/esm/components/Autocomplete/Autocomplete.mjs
var import_jsx_runtime149 = __toESM(require_jsx_runtime(), 1);
var import_react235 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Combobox/get-parsed-combobox-data/get-parsed-combobox-data.mjs
function parseItem(item) {
  if (typeof item === "string") {
    return { value: item, label: item };
  }
  if ("value" in item && !("label" in item)) {
    return { value: item.value, label: item.value, disabled: item.disabled };
  }
  if (typeof item === "number") {
    return { value: item.toString(), label: item.toString() };
  }
  if ("group" in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i))
    };
  }
  return item;
}
function getParsedComboboxData(data) {
  if (!data) {
    return [];
  }
  return data.map((item) => parseItem(item));
}

// node_modules/@mantine/core/esm/components/Combobox/get-options-lockup/get-options-lockup.mjs
function getOptionsLockup(options) {
  return options.reduce((acc, item) => {
    if ("group" in item) {
      return { ...acc, ...getOptionsLockup(item.items) };
    }
    acc[item.value] = item;
    return acc;
  }, {});
}
function getLabelsLockup(options) {
  return options.reduce((acc, item) => {
    if ("group" in item) {
      return { ...acc, ...getLabelsLockup(item.items) };
    }
    acc[item.label] = item;
    return acc;
  }, {});
}

// node_modules/@mantine/core/esm/components/Combobox/ComboboxChevron/ComboboxChevron.mjs
var import_jsx_runtime124 = __toESM(require_jsx_runtime(), 1);
var import_react209 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Combobox/Combobox.module.css.mjs
var classes22 = { "dropdown": "m_88b62a41", "options": "m_b2821a6e", "option": "m_92253aa5", "search": "m_985517d8", "empty": "m_2530cd1d", "header": "m_858f94bd", "footer": "m_82b967cb", "group": "m_254f3e4f", "groupLabel": "m_2bb2e9e5", "chevron": "m_2943220b", "optionsDropdownOption": "m_390b5f4", "optionsDropdownCheckIcon": "m_8ee53fc2" };

// node_modules/@mantine/core/esm/components/Combobox/ComboboxChevron/ComboboxChevron.mjs
var defaultProps42 = {
  error: null
};
var varsResolver22 = createVarsResolver((_, { size: size4 }) => ({
  chevron: {
    "--combobox-chevron-size": getSize(size4, "combobox-chevron-size")
  }
}));
var ComboboxChevron = factory((_props, ref) => {
  const props = useProps("ComboboxChevron", defaultProps42, _props);
  const { size: size4, error: error2, style, className, classNames, styles, unstyled, vars, mod, ...others } = props;
  const getStyles2 = useStyles({
    name: "ComboboxChevron",
    classes: classes22,
    props,
    style,
    className,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver22,
    rootSelector: "chevron"
  });
  return (0, import_jsx_runtime124.jsx)(
    Box,
    {
      component: "svg",
      ...others,
      ...getStyles2("chevron"),
      size: size4,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: error2 }, mod],
      ref,
      children: (0, import_jsx_runtime124.jsx)(
        "path",
        {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
});
ComboboxChevron.classes = classes22;
ComboboxChevron.displayName = "@mantine/core/ComboboxChevron";

// node_modules/@mantine/core/esm/components/Combobox/Combobox.mjs
var import_jsx_runtime139 = __toESM(require_jsx_runtime(), 1);
var import_react225 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Combobox/Combobox.context.mjs
var import_react210 = __toESM(require_react(), 1);
var import_jsx_runtime125 = __toESM(require_jsx_runtime(), 1);
var [ComboboxProvider, useComboboxContext] = createSafeContext(
  "Combobox component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Combobox/ComboboxClearButton/ComboboxClearButton.mjs
var import_jsx_runtime126 = __toESM(require_jsx_runtime(), 1);
var import_react211 = __toESM(require_react(), 1);
var ComboboxClearButton = (0, import_react211.forwardRef)(
  ({ size: size4, onMouseDown, onClick, onClear, ...others }, ref) => (0, import_jsx_runtime126.jsx)(
    CloseButton,
    {
      ref,
      size: size4 || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": true,
      ...others,
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown == null ? void 0 : onMouseDown(event);
      },
      onClick: (event) => {
        onClear();
        onClick == null ? void 0 : onClick(event);
      }
    }
  )
);
ComboboxClearButton.displayName = "@mantine/core/ComboboxClearButton";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxDropdown/ComboboxDropdown.mjs
var import_jsx_runtime127 = __toESM(require_jsx_runtime(), 1);
var import_react212 = __toESM(require_react(), 1);
var defaultProps43 = {};
var ComboboxDropdown = factory((props, ref) => {
  const { classNames, styles, className, style, hidden: hidden2, ...others } = useProps(
    "ComboboxDropdown",
    defaultProps43,
    props
  );
  const ctx = useComboboxContext();
  return (0, import_jsx_runtime127.jsx)(
    Popover.Dropdown,
    {
      ...others,
      ref,
      role: "presentation",
      "data-hidden": hidden2 || void 0,
      ...ctx.getStyles("dropdown", { className, style, classNames, styles })
    }
  );
});
ComboboxDropdown.classes = classes22;
ComboboxDropdown.displayName = "@mantine/core/ComboboxDropdown";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.mjs
var import_jsx_runtime128 = __toESM(require_jsx_runtime(), 1);
var import_react213 = __toESM(require_react(), 1);
var defaultProps44 = {
  refProp: "ref"
};
var ComboboxDropdownTarget = factory((props, ref) => {
  const { children, refProp } = useProps("ComboboxDropdownTarget", defaultProps44, props);
  useComboboxContext();
  if (!isElement(children)) {
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  return (0, import_jsx_runtime128.jsx)(Popover.Target, { ref, refProp, children });
});
ComboboxDropdownTarget.displayName = "@mantine/core/ComboboxDropdownTarget";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxEmpty/ComboboxEmpty.mjs
var import_jsx_runtime129 = __toESM(require_jsx_runtime(), 1);
var import_react214 = __toESM(require_react(), 1);
var defaultProps45 = {};
var ComboboxEmpty = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "ComboboxEmpty",
    defaultProps45,
    props
  );
  const ctx = useComboboxContext();
  return (0, import_jsx_runtime129.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("empty", { className, classNames, styles, style }),
      ...others
    }
  );
});
ComboboxEmpty.classes = classes22;
ComboboxEmpty.displayName = "@mantine/core/ComboboxEmpty";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.mjs
var import_react216 = __toESM(require_react(), 1);
var import_jsx_runtime130 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/Combobox/use-combobox-target-props/use-combobox-target-props.mjs
var import_react215 = __toESM(require_react(), 1);
function useComboboxTargetProps({
  onKeyDown,
  withKeyboardNavigation,
  withAriaAttributes,
  withExpandedAttribute,
  targetType,
  autoComplete
}) {
  const ctx = useComboboxContext();
  const [selectedOptionId, setSelectedOptionId] = (0, import_react215.useState)(null);
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (ctx.readOnly) {
      return;
    }
    if (withKeyboardNavigation) {
      if (event.nativeEvent.isComposing)
        return;
      if (event.nativeEvent.code === "ArrowDown") {
        event.preventDefault();
        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown("keyboard");
          setSelectedOptionId(ctx.store.selectActiveOption());
        } else {
          setSelectedOptionId(ctx.store.selectNextOption());
        }
      }
      if (event.nativeEvent.code === "ArrowUp") {
        event.preventDefault();
        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown("keyboard");
          setSelectedOptionId(ctx.store.selectActiveOption());
        } else {
          setSelectedOptionId(ctx.store.selectPreviousOption());
        }
      }
      if (event.nativeEvent.code === "Enter" || event.nativeEvent.code === "NumpadEnter") {
        if (event.nativeEvent.keyCode === 229)
          return;
        const selectedOptionIndex = ctx.store.getSelectedOptionIndex();
        if (ctx.store.dropdownOpened && selectedOptionIndex !== -1) {
          event.preventDefault();
          ctx.store.clickSelectedOption();
        } else if (targetType === "button") {
          event.preventDefault();
          ctx.store.openDropdown("keyboard");
        }
      }
      if (event.nativeEvent.code === "Escape") {
        ctx.store.closeDropdown("keyboard");
      }
      if (event.nativeEvent.code === "Space") {
        if (targetType === "button") {
          event.preventDefault();
          ctx.store.toggleDropdown("keyboard");
        }
      }
    }
  };
  const ariaAttributes = withAriaAttributes ? {
    "aria-haspopup": "listbox",
    "aria-expanded": withExpandedAttribute && !!(ctx.store.listId && ctx.store.dropdownOpened) || void 0,
    "aria-controls": ctx.store.listId,
    "aria-activedescendant": ctx.store.dropdownOpened ? selectedOptionId || void 0 : void 0,
    autoComplete,
    "data-expanded": ctx.store.dropdownOpened || void 0,
    "data-mantine-stop-propagation": ctx.store.dropdownOpened || void 0
  } : {};
  return {
    ...ariaAttributes,
    onKeyDown: handleKeyDown
  };
}

// node_modules/@mantine/core/esm/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.mjs
var defaultProps46 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
  autoComplete: "off"
};
var ComboboxEventsTarget = factory((props, ref) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    autoComplete,
    ...others
  } = useProps("ComboboxEventsTarget", defaultProps46, props);
  if (!isElement(children)) {
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: children.props.onKeyDown,
    autoComplete
  });
  return (0, import_react216.cloneElement)(children, {
    ...targetProps,
    ...others,
    [refProp]: useMergedRef(ref, ctx.store.targetRef, children == null ? void 0 : children.ref)
  });
});
ComboboxEventsTarget.displayName = "@mantine/core/ComboboxEventsTarget";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxFooter/ComboboxFooter.mjs
var import_jsx_runtime131 = __toESM(require_jsx_runtime(), 1);
var import_react217 = __toESM(require_react(), 1);
var defaultProps47 = {};
var ComboboxFooter = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "ComboboxFooter",
    defaultProps47,
    props
  );
  const ctx = useComboboxContext();
  return (0, import_jsx_runtime131.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("footer", { className, classNames, style, styles }),
      ...others,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }
  );
});
ComboboxFooter.classes = classes22;
ComboboxFooter.displayName = "@mantine/core/ComboboxFooter";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxGroup/ComboboxGroup.mjs
var import_jsx_runtime132 = __toESM(require_jsx_runtime(), 1);
var import_react218 = __toESM(require_react(), 1);
var defaultProps48 = {};
var ComboboxGroup = factory((props, ref) => {
  const { classNames, className, style, styles, vars, children, label, ...others } = useProps(
    "ComboboxGroup",
    defaultProps48,
    props
  );
  const ctx = useComboboxContext();
  return (0, import_jsx_runtime132.jsxs)(
    Box,
    {
      ref,
      ...ctx.getStyles("group", { className, classNames, style, styles }),
      ...others,
      children: [
        label && (0, import_jsx_runtime132.jsx)("div", { ...ctx.getStyles("groupLabel", { classNames, styles }), children: label }),
        children
      ]
    }
  );
});
ComboboxGroup.classes = classes22;
ComboboxGroup.displayName = "@mantine/core/ComboboxGroup";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxHeader/ComboboxHeader.mjs
var import_jsx_runtime133 = __toESM(require_jsx_runtime(), 1);
var import_react219 = __toESM(require_react(), 1);
var defaultProps49 = {};
var ComboboxHeader = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "ComboboxHeader",
    defaultProps49,
    props
  );
  const ctx = useComboboxContext();
  return (0, import_jsx_runtime133.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("header", { className, classNames, style, styles }),
      ...others,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }
  );
});
ComboboxHeader.classes = classes22;
ComboboxHeader.displayName = "@mantine/core/ComboboxHeader";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxHiddenInput/ComboboxHiddenInput.mjs
var import_jsx_runtime134 = __toESM(require_jsx_runtime(), 1);
function ComboboxHiddenInput({
  value,
  valuesDivider = ",",
  ...others
}) {
  return (0, import_jsx_runtime134.jsx)(
    "input",
    {
      type: "hidden",
      value: Array.isArray(value) ? value.join(valuesDivider) : value || "",
      ...others
    }
  );
}
ComboboxHiddenInput.displayName = "@mantine/core/ComboboxHiddenInput";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxOption/ComboboxOption.mjs
var import_jsx_runtime135 = __toESM(require_jsx_runtime(), 1);
var import_react220 = __toESM(require_react(), 1);
var defaultProps50 = {};
var ComboboxOption = factory((_props, ref) => {
  const props = useProps("ComboboxOption", defaultProps50, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onClick,
    id,
    active,
    onMouseDown,
    onMouseOver,
    disabled,
    selected,
    mod,
    ...others
  } = props;
  const ctx = useComboboxContext();
  const uuid = (0, import_react220.useId)();
  const _id = id || uuid;
  return (0, import_jsx_runtime135.jsx)(
    Box,
    {
      ...ctx.getStyles("option", { className, classNames, styles, style }),
      ...others,
      ref,
      id: _id,
      mod: [
        "combobox-option",
        { "combobox-active": active, "combobox-disabled": disabled, "combobox-selected": selected },
        mod
      ],
      role: "option",
      onClick: (event) => {
        var _a;
        if (!disabled) {
          (_a = ctx.onOptionSubmit) == null ? void 0 : _a.call(ctx, props.value, props);
          onClick == null ? void 0 : onClick(event);
        } else {
          event.preventDefault();
        }
      },
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown == null ? void 0 : onMouseDown(event);
      },
      onMouseOver: (event) => {
        if (ctx.resetSelectionOnOptionHover) {
          ctx.store.resetSelectedOption();
        }
        onMouseOver == null ? void 0 : onMouseOver(event);
      }
    }
  );
});
ComboboxOption.classes = classes22;
ComboboxOption.displayName = "@mantine/core/ComboboxOption";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxOptions/ComboboxOptions.mjs
var import_jsx_runtime136 = __toESM(require_jsx_runtime(), 1);
var import_react221 = __toESM(require_react(), 1);
var defaultProps51 = {};
var ComboboxOptions = factory((_props, ref) => {
  const props = useProps("ComboboxOptions", defaultProps51, _props);
  const { classNames, className, style, styles, id, onMouseDown, labelledBy, ...others } = props;
  const ctx = useComboboxContext();
  const _id = useId(id);
  (0, import_react221.useEffect)(() => {
    ctx.store.setListId(_id);
  }, [_id]);
  return (0, import_jsx_runtime136.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("options", { className, style, classNames, styles }),
      ...others,
      id: _id,
      role: "listbox",
      "aria-labelledby": labelledBy,
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown == null ? void 0 : onMouseDown(event);
      }
    }
  );
});
ComboboxOptions.classes = classes22;
ComboboxOptions.displayName = "@mantine/core/ComboboxOptions";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxSearch/ComboboxSearch.mjs
var import_jsx_runtime137 = __toESM(require_jsx_runtime(), 1);
var import_react222 = __toESM(require_react(), 1);
var defaultProps52 = {
  withAriaAttributes: true,
  withKeyboardNavigation: true
};
var ComboboxSearch = factory((_props, ref) => {
  const props = useProps("ComboboxSearch", defaultProps52, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    withAriaAttributes,
    onKeyDown,
    withKeyboardNavigation,
    size: size4,
    ...others
  } = props;
  const ctx = useComboboxContext();
  const _styles = ctx.getStyles("search");
  const targetProps = useComboboxTargetProps({
    targetType: "input",
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute: false,
    onKeyDown,
    autoComplete: "off"
  });
  return (0, import_jsx_runtime137.jsx)(
    Input,
    {
      ref: useMergedRef(ref, ctx.store.searchRef),
      classNames: [{ input: _styles.className }, classNames],
      styles: [{ input: _styles.style }, styles],
      size: size4 || ctx.size,
      ...targetProps,
      ...others,
      __staticSelector: "Combobox"
    }
  );
});
ComboboxSearch.classes = classes22;
ComboboxSearch.displayName = "@mantine/core/ComboboxSearch";

// node_modules/@mantine/core/esm/components/Combobox/ComboboxTarget/ComboboxTarget.mjs
var import_jsx_runtime138 = __toESM(require_jsx_runtime(), 1);
var import_react223 = __toESM(require_react(), 1);
var defaultProps53 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
  autoComplete: "off"
};
var ComboboxTarget = factory((props, ref) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    autoComplete,
    ...others
  } = useProps("ComboboxTarget", defaultProps53, props);
  if (!isElement(children)) {
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: children.props.onKeyDown,
    autoComplete
  });
  const clonedElement = (0, import_react223.cloneElement)(children, {
    ...targetProps,
    ...others
  });
  return (0, import_jsx_runtime138.jsx)(Popover.Target, { ref: useMergedRef(ref, ctx.store.targetRef), children: clonedElement });
});
ComboboxTarget.displayName = "@mantine/core/ComboboxTarget";

// node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-combobox.mjs
var import_react224 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Combobox/use-combobox/get-index/get-index.mjs
function getPreviousIndex2(currentIndex, elements, loop) {
  for (let i = currentIndex - 1; i >= 0; i -= 1) {
    if (!elements[i].hasAttribute("data-combobox-disabled")) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].hasAttribute("data-combobox-disabled")) {
        return i;
      }
    }
  }
  return currentIndex;
}
function getNextIndex2(currentIndex, elements, loop) {
  for (let i = currentIndex + 1; i < elements.length; i += 1) {
    if (!elements[i].hasAttribute("data-combobox-disabled")) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].hasAttribute("data-combobox-disabled")) {
        return i;
      }
    }
  }
  return currentIndex;
}
function getFirstIndex(elements) {
  for (let i = 0; i < elements.length; i += 1) {
    if (!elements[i].hasAttribute("data-combobox-disabled")) {
      return i;
    }
  }
  return -1;
}

// node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-combobox.mjs
function useCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
  scrollBehavior = "instant"
} = {}) {
  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange
  });
  const listId = (0, import_react224.useRef)(null);
  const selectedOptionIndex = (0, import_react224.useRef)(-1);
  const searchRef = (0, import_react224.useRef)(null);
  const targetRef = (0, import_react224.useRef)(null);
  const focusSearchTimeout = (0, import_react224.useRef)(-1);
  const focusTargetTimeout = (0, import_react224.useRef)(-1);
  const selectedIndexUpdateTimeout = (0, import_react224.useRef)(-1);
  const openDropdown = (0, import_react224.useCallback)(
    (eventSource = "unknown") => {
      if (!dropdownOpened) {
        setDropdownOpened(true);
        onDropdownOpen == null ? void 0 : onDropdownOpen(eventSource);
      }
    },
    [setDropdownOpened, onDropdownOpen, dropdownOpened]
  );
  const closeDropdown = (0, import_react224.useCallback)(
    (eventSource = "unknown") => {
      if (dropdownOpened) {
        setDropdownOpened(false);
        onDropdownClose == null ? void 0 : onDropdownClose(eventSource);
      }
    },
    [setDropdownOpened, onDropdownClose, dropdownOpened]
  );
  const toggleDropdown = (0, import_react224.useCallback)(
    (eventSource = "unknown") => {
      if (dropdownOpened) {
        closeDropdown(eventSource);
      } else {
        openDropdown(eventSource);
      }
    },
    [closeDropdown, openDropdown, dropdownOpened]
  );
  const clearSelectedItem = (0, import_react224.useCallback)(() => {
    const selected = document.querySelector(`#${listId.current} [data-combobox-selected]`);
    selected == null ? void 0 : selected.removeAttribute("data-combobox-selected");
    selected == null ? void 0 : selected.removeAttribute("aria-selected");
  }, []);
  const selectOption = (0, import_react224.useCallback)(
    (index5) => {
      const list = document.getElementById(listId.current);
      const items = list == null ? void 0 : list.querySelectorAll("[data-combobox-option]");
      if (!items) {
        return null;
      }
      const nextIndex = index5 >= items.length ? 0 : index5 < 0 ? items.length - 1 : index5;
      selectedOptionIndex.current = nextIndex;
      if ((items == null ? void 0 : items[nextIndex]) && !items[nextIndex].hasAttribute("data-combobox-disabled")) {
        clearSelectedItem();
        items[nextIndex].setAttribute("data-combobox-selected", "true");
        items[nextIndex].setAttribute("aria-selected", "true");
        items[nextIndex].scrollIntoView({ block: "nearest", behavior: scrollBehavior });
        return items[nextIndex].id;
      }
      return null;
    },
    [scrollBehavior, clearSelectedItem]
  );
  const selectActiveOption = (0, import_react224.useCallback)(() => {
    const activeOption = document.querySelector(
      `#${listId.current} [data-combobox-active]`
    );
    if (activeOption) {
      const items = document.querySelectorAll(
        `#${listId.current} [data-combobox-option]`
      );
      const index5 = Array.from(items).findIndex((option) => option === activeOption);
      return selectOption(index5);
    }
    return selectOption(0);
  }, [selectOption]);
  const selectNextOption = (0, import_react224.useCallback)(
    () => selectOption(
      getNextIndex2(
        selectedOptionIndex.current,
        document.querySelectorAll(`#${listId.current} [data-combobox-option]`),
        loop
      )
    ),
    [selectOption, loop]
  );
  const selectPreviousOption = (0, import_react224.useCallback)(
    () => selectOption(
      getPreviousIndex2(
        selectedOptionIndex.current,
        document.querySelectorAll(`#${listId.current} [data-combobox-option]`),
        loop
      )
    ),
    [selectOption, loop]
  );
  const selectFirstOption = (0, import_react224.useCallback)(
    () => selectOption(
      getFirstIndex(
        document.querySelectorAll(`#${listId.current} [data-combobox-option]`)
      )
    ),
    [selectOption]
  );
  const updateSelectedOptionIndex = (0, import_react224.useCallback)(
    (target = "selected", options) => {
      selectedIndexUpdateTimeout.current = window.setTimeout(() => {
        var _a;
        const items = document.querySelectorAll(
          `#${listId.current} [data-combobox-option]`
        );
        const index5 = Array.from(items).findIndex(
          (option) => option.hasAttribute(`data-combobox-${target}`)
        );
        selectedOptionIndex.current = index5;
        if (options == null ? void 0 : options.scrollIntoView) {
          (_a = items[index5]) == null ? void 0 : _a.scrollIntoView({ block: "nearest", behavior: scrollBehavior });
        }
      }, 0);
    },
    []
  );
  const resetSelectedOption = (0, import_react224.useCallback)(() => {
    selectedOptionIndex.current = -1;
    clearSelectedItem();
  }, [clearSelectedItem]);
  const clickSelectedOption = (0, import_react224.useCallback)(() => {
    const items = document.querySelectorAll(
      `#${listId.current} [data-combobox-option]`
    );
    const item = items == null ? void 0 : items[selectedOptionIndex.current];
    item == null ? void 0 : item.click();
  }, []);
  const setListId = (0, import_react224.useCallback)((id) => {
    listId.current = id;
  }, []);
  const focusSearchInput = (0, import_react224.useCallback)(() => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current.focus(), 0);
  }, []);
  const focusTarget = (0, import_react224.useCallback)(() => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current.focus(), 0);
  }, []);
  const getSelectedOptionIndex = (0, import_react224.useCallback)(() => selectedOptionIndex.current, []);
  (0, import_react224.useEffect)(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
      window.clearTimeout(selectedIndexUpdateTimeout.current);
    },
    []
  );
  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectedOptionIndex: selectedOptionIndex.current,
    getSelectedOptionIndex,
    selectOption,
    selectFirstOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,
    updateSelectedOptionIndex,
    listId: listId.current,
    setListId,
    clickSelectedOption,
    searchRef,
    focusSearchInput,
    targetRef,
    focusTarget
  };
}

// node_modules/@mantine/core/esm/components/Combobox/Combobox.mjs
var defaultProps54 = {
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
};
var varsResolver23 = createVarsResolver((_, { size: size4, dropdownPadding }) => ({
  options: {
    "--combobox-option-fz": getFontSize(size4),
    "--combobox-option-padding": getSize(size4, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": dropdownPadding === void 0 ? void 0 : rem(dropdownPadding),
    "--combobox-option-fz": getFontSize(size4),
    "--combobox-option-padding": getSize(size4, "combobox-option-padding")
  }
}));
function Combobox(_props) {
  const props = useProps("Combobox", defaultProps54, _props);
  const {
    classNames,
    styles,
    unstyled,
    children,
    store: controlledStore,
    vars,
    onOptionSubmit,
    onClose,
    size: size4,
    dropdownPadding,
    resetSelectionOnOptionHover,
    __staticSelector,
    readOnly,
    ...others
  } = props;
  const uncontrolledStore = useCombobox();
  const store = controlledStore || uncontrolledStore;
  const getStyles2 = useStyles({
    name: __staticSelector || "Combobox",
    classes: classes22,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver23
  });
  const onDropdownClose = () => {
    onClose == null ? void 0 : onClose();
    store.closeDropdown();
  };
  return (0, import_jsx_runtime139.jsx)(
    ComboboxProvider,
    {
      value: {
        getStyles: getStyles2,
        store,
        onOptionSubmit,
        size: size4,
        resetSelectionOnOptionHover,
        readOnly
      },
      children: (0, import_jsx_runtime139.jsx)(
        Popover,
        {
          opened: store.dropdownOpened,
          ...others,
          onClose: onDropdownClose,
          withRoles: false,
          unstyled,
          children
        }
      )
    }
  );
}
var extendCombobox = (c) => c;
Combobox.extend = extendCombobox;
Combobox.classes = classes22;
Combobox.displayName = "@mantine/core/Combobox";
Combobox.Target = ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown;
Combobox.Options = ComboboxOptions;
Combobox.Option = ComboboxOption;
Combobox.Search = ComboboxSearch;
Combobox.Empty = ComboboxEmpty;
Combobox.Chevron = ComboboxChevron;
Combobox.Footer = ComboboxFooter;
Combobox.Header = ComboboxHeader;
Combobox.EventsTarget = ComboboxEventsTarget;
Combobox.DropdownTarget = ComboboxDropdownTarget;
Combobox.Group = ComboboxGroup;
Combobox.ClearButton = ComboboxClearButton;
Combobox.HiddenInput = ComboboxHiddenInput;

// node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/OptionsDropdown.mjs
var import_jsx_runtime148 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/Checkbox/Checkbox.mjs
var import_jsx_runtime147 = __toESM(require_jsx_runtime(), 1);
var import_react234 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/InlineInput/InlineInput.mjs
var import_jsx_runtime140 = __toESM(require_jsx_runtime(), 1);
var import_react226 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/InlineInput/InlineInput.module.css.mjs
var classes23 = { "root": "m_5f75b09e", "body": "m_5f6e695e", "labelWrapper": "m_d3ea56bb", "label": "m_8ee546b8", "description": "m_328f68c0", "error": "m_8e8a99cc" };

// node_modules/@mantine/core/esm/components/InlineInput/InlineInput.mjs
var InlineInputClasses = classes23;
var InlineInput = (0, import_react226.forwardRef)(
  ({
    __staticSelector,
    __stylesApiProps,
    className,
    classNames,
    styles,
    unstyled,
    children,
    label,
    description,
    id,
    disabled,
    error: error2,
    size: size4,
    labelPosition = "left",
    bodyElement = "div",
    labelElement = "label",
    variant,
    style,
    vars,
    mod,
    ...others
  }, ref) => {
    const getStyles2 = useStyles({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes: classes23,
      classNames,
      styles,
      unstyled
    });
    return (0, import_jsx_runtime140.jsx)(
      Box,
      {
        ...getStyles2("root"),
        ref,
        __vars: {
          "--label-fz": getFontSize(size4),
          "--label-lh": getSize(size4, "label-lh")
        },
        mod: [{ "label-position": labelPosition }, mod],
        variant,
        size: size4,
        ...others,
        children: (0, import_jsx_runtime140.jsxs)(
          Box,
          {
            component: bodyElement,
            htmlFor: bodyElement === "label" ? id : void 0,
            ...getStyles2("body"),
            children: [
              children,
              (0, import_jsx_runtime140.jsxs)("div", { ...getStyles2("labelWrapper"), "data-disabled": disabled || void 0, children: [
                label && (0, import_jsx_runtime140.jsx)(
                  Box,
                  {
                    component: labelElement,
                    htmlFor: labelElement === "label" ? id : void 0,
                    ...getStyles2("label"),
                    "data-disabled": disabled || void 0,
                    children: label
                  }
                ),
                description && (0, import_jsx_runtime140.jsx)(Input.Description, { size: size4, __inheritStyles: false, ...getStyles2("description"), children: description }),
                error2 && typeof error2 !== "boolean" && (0, import_jsx_runtime140.jsx)(Input.Error, { size: size4, __inheritStyles: false, ...getStyles2("error"), children: error2 })
              ] })
            ]
          }
        )
      }
    );
  }
);
InlineInput.displayName = "@mantine/core/InlineInput";

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxCard/CheckboxCard.mjs
var import_jsx_runtime142 = __toESM(require_jsx_runtime(), 1);
var import_react229 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxGroup.context.mjs
var import_react227 = __toESM(require_react(), 1);
var CheckboxGroupContext = (0, import_react227.createContext)(null);
var CheckboxGroupProvider = CheckboxGroupContext.Provider;
var useCheckboxGroupContext = () => (0, import_react227.useContext)(CheckboxGroupContext);

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxCard/CheckboxCard.context.mjs
var import_react228 = __toESM(require_react(), 1);
var import_jsx_runtime141 = __toESM(require_jsx_runtime(), 1);
var [CheckboxCardProvider, useCheckboxCardContext] = createOptionalContext();

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxCard/CheckboxCard.module.css.mjs
var classes24 = { "card": "m_26775b0a" };

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxCard/CheckboxCard.mjs
var defaultProps55 = {
  withBorder: true
};
var varsResolver24 = createVarsResolver((_, { radius }) => ({
  card: {
    "--card-radius": getRadius(radius)
  }
}));
var CheckboxCard = factory((_props, ref) => {
  const props = useProps("CheckboxCard", defaultProps55, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    checked,
    mod,
    withBorder,
    value,
    onClick,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "CheckboxCard",
    classes: classes24,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver24,
    rootSelector: "card"
  });
  const ctx = useCheckboxGroupContext();
  const _checked = typeof checked === "boolean" ? checked : (ctx == null ? void 0 : ctx.value.includes(value || "")) || false;
  return (0, import_jsx_runtime142.jsx)(CheckboxCardProvider, { value: { checked: _checked }, children: (0, import_jsx_runtime142.jsx)(
    UnstyledButton,
    {
      ref,
      mod: [{ "with-border": withBorder, checked: _checked }, mod],
      ...getStyles2("card"),
      ...others,
      role: "checkbox",
      "aria-checked": _checked,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx == null ? void 0 : ctx.onChange(value || "");
      }
    }
  ) });
});
CheckboxCard.displayName = "@mantine/core/CheckboxCard";
CheckboxCard.classes = classes24;

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxGroup/CheckboxGroup.mjs
var import_jsx_runtime144 = __toESM(require_jsx_runtime(), 1);
var import_react231 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/InputsGroupFieldset/InputsGroupFieldset.mjs
var import_jsx_runtime143 = __toESM(require_jsx_runtime(), 1);
var import_react230 = __toESM(require_react(), 1);
function InputsGroupFieldset({ children, role }) {
  const ctx = useInputWrapperContext();
  if (!ctx) {
    return (0, import_jsx_runtime143.jsx)(import_jsx_runtime143.Fragment, { children });
  }
  return (0, import_jsx_runtime143.jsx)("div", { role, "aria-labelledby": ctx.labelId, "aria-describedby": ctx.describedBy, children });
}

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxGroup/CheckboxGroup.mjs
var defaultProps56 = {};
var CheckboxGroup = factory((props, ref) => {
  const { value, defaultValue, onChange, size: size4, wrapperProps, children, readOnly, ...others } = useProps("CheckboxGroup", defaultProps56, props);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = typeof event === "string" ? event : event.currentTarget.value;
    !readOnly && setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return (0, import_jsx_runtime144.jsx)(CheckboxGroupProvider, { value: { value: _value, onChange: handleChange, size: size4 }, children: (0, import_jsx_runtime144.jsx)(
    Input.Wrapper,
    {
      size: size4,
      ref,
      ...wrapperProps,
      ...others,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: (0, import_jsx_runtime144.jsx)(InputsGroupFieldset, { role: "group", children })
    }
  ) });
});
CheckboxGroup.classes = Input.Wrapper.classes;
CheckboxGroup.displayName = "@mantine/core/CheckboxGroup";

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxIndicator/CheckboxIndicator.mjs
var import_jsx_runtime146 = __toESM(require_jsx_runtime(), 1);
var import_react233 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Checkbox/CheckIcon.mjs
var import_jsx_runtime145 = __toESM(require_jsx_runtime(), 1);
var import_react232 = __toESM(require_react(), 1);
function CheckIcon({ size: size4, style, ...others }) {
  const _style = size4 !== void 0 ? { width: rem(size4), height: rem(size4), ...style } : style;
  return (0, import_jsx_runtime145.jsx)(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style,
      "aria-hidden": true,
      ...others,
      children: (0, import_jsx_runtime145.jsx)(
        "path",
        {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
function CheckboxIcon({ indeterminate, ...others }) {
  if (indeterminate) {
    return (0, import_jsx_runtime145.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": true,
        ...others,
        children: (0, import_jsx_runtime145.jsx)("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
      }
    );
  }
  return (0, import_jsx_runtime145.jsx)(CheckIcon, { ...others });
}

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxIndicator/CheckboxIndicator.module.css.mjs
var classes25 = { "indicator": "m_5e5256ee", "icon": "m_1b1c543a", "indicator--outline": "m_76e20374" };

// node_modules/@mantine/core/esm/components/Checkbox/CheckboxIndicator/CheckboxIndicator.mjs
var defaultProps57 = {
  icon: CheckboxIcon
};
var varsResolver25 = createVarsResolver(
  (theme, { radius, color, size: size4, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor = parsedColor.isThemeColor && parsedColor.shade === void 0 ? `var(--mantine-color-${parsedColor.color}-outline)` : parsedColor.color;
    return {
      indicator: {
        "--checkbox-size": getSize(size4, "checkbox-size"),
        "--checkbox-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--checkbox-color": variant === "outline" ? outlineColor : getThemeColor(color, theme),
        "--checkbox-icon-color": iconColor ? getThemeColor(iconColor, theme) : getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0
      }
    };
  }
);
var CheckboxIndicator = factory((_props, ref) => {
  const props = useProps("CheckboxIndicator", defaultProps57, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    icon,
    indeterminate,
    radius,
    color,
    iconColor,
    autoContrast,
    checked,
    mod,
    variant,
    disabled,
    ...others
  } = props;
  const Icon = icon;
  const getStyles2 = useStyles({
    name: "CheckboxIndicator",
    classes: classes25,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver25,
    rootSelector: "indicator"
  });
  const ctx = useCheckboxCardContext();
  const _checked = typeof checked === "boolean" || typeof indeterminate === "boolean" ? checked || indeterminate : (ctx == null ? void 0 : ctx.checked) || false;
  return (0, import_jsx_runtime146.jsx)(
    Box,
    {
      ref,
      ...getStyles2("indicator", { variant }),
      variant,
      mod: [{ checked: _checked, disabled }, mod],
      ...others,
      children: (0, import_jsx_runtime146.jsx)(Icon, { indeterminate, ...getStyles2("icon") })
    }
  );
});
CheckboxIndicator.displayName = "@mantine/core/CheckboxIndicator";
CheckboxIndicator.classes = classes25;

// node_modules/@mantine/core/esm/components/Checkbox/Checkbox.module.css.mjs
var classes26 = { "root": "m_bf2d988c", "inner": "m_26062bec", "input": "m_26063560", "icon": "m_bf295423", "input--outline": "m_215c4542" };

// node_modules/@mantine/core/esm/components/Checkbox/Checkbox.mjs
var defaultProps58 = {
  labelPosition: "right",
  icon: CheckboxIcon
};
var varsResolver26 = createVarsResolver(
  (theme, { radius, color, size: size4, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor = parsedColor.isThemeColor && parsedColor.shade === void 0 ? `var(--mantine-color-${parsedColor.color}-outline)` : parsedColor.color;
    return {
      root: {
        "--checkbox-size": getSize(size4, "checkbox-size"),
        "--checkbox-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--checkbox-color": variant === "outline" ? outlineColor : getThemeColor(color, theme),
        "--checkbox-icon-color": iconColor ? getThemeColor(iconColor, theme) : getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0
      }
    };
  }
);
var Checkbox = factory((_props, ref) => {
  const props = useProps("Checkbox", defaultProps58, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    id,
    size: size4,
    radius,
    wrapperProps,
    children,
    checked,
    labelPosition,
    description,
    error: error2,
    disabled,
    variant,
    indeterminate,
    icon,
    rootRef,
    iconColor,
    onChange,
    autoContrast,
    mod,
    ...others
  } = props;
  const ctx = useCheckboxGroupContext();
  const _size = size4 || (ctx == null ? void 0 : ctx.size);
  const Icon = icon;
  const getStyles2 = useStyles({
    name: "Checkbox",
    props,
    classes: classes26,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver26
  });
  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: (event) => {
      ctx.onChange(event);
      onChange == null ? void 0 : onChange(event);
    }
  } : {};
  return (0, import_jsx_runtime147.jsx)(
    InlineInput,
    {
      ...getStyles2("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error: error2,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || checked || void 0,
      variant,
      ref: rootRef,
      mod,
      ...styleProps,
      ...wrapperProps,
      children: (0, import_jsx_runtime147.jsxs)(Box, { ...getStyles2("inner"), mod: { "data-label-position": labelPosition }, children: [
        (0, import_jsx_runtime147.jsx)(
          Box,
          {
            component: "input",
            id: uuid,
            ref,
            checked,
            disabled,
            mod: { error: !!error2, indeterminate },
            ...getStyles2("input", { focusable: true, variant }),
            onChange,
            ...rest,
            ...contextProps,
            type: "checkbox"
          }
        ),
        (0, import_jsx_runtime147.jsx)(Icon, { indeterminate, ...getStyles2("icon") })
      ] })
    }
  );
});
Checkbox.classes = { ...classes26, ...InlineInputClasses };
Checkbox.displayName = "@mantine/core/Checkbox";
Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.Card = CheckboxCard;

// node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/is-options-group.mjs
function isOptionsGroup(item) {
  return "group" in item;
}

// node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/default-options-filter.mjs
function defaultOptionsFilter({
  options,
  search,
  limit
}) {
  const parsedSearch = search.trim().toLowerCase();
  const result = [];
  for (let i = 0; i < options.length; i += 1) {
    const item = options[i];
    if (result.length === limit) {
      return result;
    }
    if (isOptionsGroup(item)) {
      result.push({
        group: item.group,
        items: defaultOptionsFilter({
          options: item.items,
          search,
          limit: limit - result.length
        })
      });
    }
    if (!isOptionsGroup(item)) {
      if (item.label.toLowerCase().includes(parsedSearch)) {
        result.push(item);
      }
    }
  }
  return result;
}

// node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/is-empty-combobox-data.mjs
function isEmptyComboboxData(data) {
  if (data.length === 0) {
    return true;
  }
  for (const item of data) {
    if (!("group" in item)) {
      return false;
    }
    if (item.items.length > 0) {
      return false;
    }
  }
  return true;
}

// node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/validate-options.mjs
function validateOptions(options, valuesSet = /* @__PURE__ */ new Set()) {
  if (!Array.isArray(options)) {
    return;
  }
  for (const option of options) {
    if (isOptionsGroup(option)) {
      validateOptions(option.items, valuesSet);
    } else {
      if (typeof option.value === "undefined") {
        throw new Error("[@mantine/core] Each option must have value property");
      }
      if (typeof option.value !== "string") {
        throw new Error(
          `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof option.value}`
        );
      }
      if (valuesSet.has(option.value)) {
        throw new Error(
          `[@mantine/core] Duplicate options are not supported. Option with value "${option.value}" was provided more than once`
        );
      }
      valuesSet.add(option.value);
    }
  }
}

// node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/OptionsDropdown.mjs
function isValueChecked(value, optionValue) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}
function Option({
  data,
  withCheckIcon,
  value,
  checkIconPosition,
  unstyled,
  renderOption
}) {
  if (!isOptionsGroup(data)) {
    const checked = isValueChecked(value, data.value);
    const check = withCheckIcon && checked && (0, import_jsx_runtime148.jsx)(CheckIcon, { className: classes22.optionsDropdownCheckIcon });
    const defaultContent = (0, import_jsx_runtime148.jsxs)(import_jsx_runtime148.Fragment, { children: [
      checkIconPosition === "left" && check,
      (0, import_jsx_runtime148.jsx)("span", { children: data.label }),
      checkIconPosition === "right" && check
    ] });
    return (0, import_jsx_runtime148.jsx)(
      Combobox.Option,
      {
        value: data.value,
        disabled: data.disabled,
        className: clsx_default({ [classes22.optionsDropdownOption]: !unstyled }),
        "data-reverse": checkIconPosition === "right" || void 0,
        "data-checked": checked || void 0,
        "aria-selected": checked,
        active: checked,
        children: typeof renderOption === "function" ? renderOption({ option: data, checked }) : defaultContent
      }
    );
  }
  const options = data.items.map((item) => (0, import_jsx_runtime148.jsx)(
    Option,
    {
      data: item,
      value,
      unstyled,
      withCheckIcon,
      checkIconPosition,
      renderOption
    },
    item.value
  ));
  return (0, import_jsx_runtime148.jsx)(Combobox.Group, { label: data.group, children: options });
}
function OptionsDropdown({
  data,
  hidden: hidden2,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea = true,
  filterOptions = true,
  withCheckIcon = false,
  value,
  checkIconPosition,
  nothingFoundMessage,
  unstyled,
  labelId,
  renderOption,
  scrollAreaProps,
  "aria-label": ariaLabel
}) {
  validateOptions(data);
  const shouldFilter = typeof search === "string";
  const filteredData = shouldFilter ? (filter || defaultOptionsFilter)({
    options: data,
    search: filterOptions ? search : "",
    limit: limit ?? Infinity
  }) : data;
  const isEmpty = isEmptyComboboxData(filteredData);
  const options = filteredData.map((item) => (0, import_jsx_runtime148.jsx)(
    Option,
    {
      data: item,
      withCheckIcon,
      value,
      checkIconPosition,
      unstyled,
      renderOption
    },
    isOptionsGroup(item) ? item.group : item.value
  ));
  return (0, import_jsx_runtime148.jsx)(Combobox.Dropdown, { hidden: hidden2 || hiddenWhenEmpty && isEmpty, children: (0, import_jsx_runtime148.jsxs)(Combobox.Options, { labelledBy: labelId, "aria-label": ariaLabel, children: [
    withScrollArea ? (0, import_jsx_runtime148.jsx)(
      ScrollArea.Autosize,
      {
        mah: maxDropdownHeight ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...scrollAreaProps,
        children: options
      }
    ) : options,
    isEmpty && nothingFoundMessage && (0, import_jsx_runtime148.jsx)(Combobox.Empty, { children: nothingFoundMessage })
  ] }) });
}

// node_modules/@mantine/core/esm/components/Autocomplete/Autocomplete.mjs
var defaultProps59 = {};
var Autocomplete = factory((_props, ref) => {
  const props = useProps("Autocomplete", defaultProps59, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    value,
    defaultValue,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size: size4,
    id,
    renderOption,
    autoComplete,
    scrollAreaProps,
    ...others
  } = props;
  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose == null ? void 0 : onDropdownClose();
      combobox.resetSelectedOption();
    }
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  (0, import_react235.useEffect)(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);
  return (0, import_jsx_runtime149.jsxs)(
    Combobox,
    {
      store: combobox,
      __staticSelector: "Autocomplete",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      readOnly,
      onOptionSubmit: (val) => {
        onOptionSubmit == null ? void 0 : onOptionSubmit(val);
        setValue(optionsLockup[val].label);
        combobox.closeDropdown();
      },
      size: size4,
      ...comboboxProps,
      children: [
        (0, import_jsx_runtime149.jsx)(Combobox.Target, { autoComplete, children: (0, import_jsx_runtime149.jsx)(
          InputBase,
          {
            ref,
            ...others,
            size: size4,
            __staticSelector: "Autocomplete",
            disabled,
            readOnly,
            value: _value,
            onChange: (event) => {
              setValue(event.currentTarget.value);
              combobox.openDropdown();
              selectFirstOptionOnChange && combobox.selectFirstOption();
            },
            onFocus: (event) => {
              combobox.openDropdown();
              onFocus == null ? void 0 : onFocus(event);
            },
            onBlur: (event) => {
              combobox.closeDropdown();
              onBlur == null ? void 0 : onBlur(event);
            },
            onClick: (event) => {
              combobox.openDropdown();
              onClick == null ? void 0 : onClick(event);
            },
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            id: _id
          }
        ) }),
        (0, import_jsx_runtime149.jsx)(
          OptionsDropdown,
          {
            data: parsedData,
            hidden: readOnly || disabled,
            filter,
            search: _value,
            limit,
            hiddenWhenEmpty: true,
            withScrollArea,
            maxDropdownHeight,
            unstyled,
            labelId: others.label ? `${_id}-label` : void 0,
            "aria-label": others.label ? void 0 : others["aria-label"],
            renderOption,
            scrollAreaProps
          }
        )
      ]
    }
  );
});
Autocomplete.classes = { ...InputBase.classes, ...Combobox.classes };
Autocomplete.displayName = "@mantine/core/Autocomplete";

// node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs
var import_jsx_runtime152 = __toESM(require_jsx_runtime(), 1);
var import_react238 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.mjs
var import_jsx_runtime150 = __toESM(require_jsx_runtime(), 1);
var import_react237 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.context.mjs
var import_react236 = __toESM(require_react(), 1);
var AvatarGroupContext = (0, import_react236.createContext)(null);
var AvatarGroupProvider = AvatarGroupContext.Provider;
function useAvatarGroupContext() {
  const ctx = (0, import_react236.useContext)(AvatarGroupContext);
  return { withinGroup: !!ctx };
}

// node_modules/@mantine/core/esm/components/Avatar/Avatar.module.css.mjs
var classes27 = { "group": "m_11def92b", "root": "m_f85678b6", "image": "m_11f8ac07", "placeholder": "m_104cd71f" };

// node_modules/@mantine/core/esm/components/Avatar/AvatarGroup/AvatarGroup.mjs
var defaultProps60 = {};
var varsResolver27 = createVarsResolver((_, { spacing }) => ({
  group: {
    "--ag-spacing": getSpacing(spacing)
  }
}));
var AvatarGroup = factory((_props, ref) => {
  const props = useProps("AvatarGroup", defaultProps60, _props);
  const { classNames, className, style, styles, unstyled, vars, spacing, ...others } = props;
  const getStyles2 = useStyles({
    name: "AvatarGroup",
    classes: classes27,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver27,
    rootSelector: "group"
  });
  return (0, import_jsx_runtime150.jsx)(AvatarGroupProvider, { value: true, children: (0, import_jsx_runtime150.jsx)(Box, { ref, ...getStyles2("group"), ...others }) });
});
AvatarGroup.classes = classes27;
AvatarGroup.displayName = "@mantine/core/AvatarGroup";

// node_modules/@mantine/core/esm/components/Avatar/AvatarPlaceholderIcon.mjs
var import_jsx_runtime151 = __toESM(require_jsx_runtime(), 1);
function AvatarPlaceholderIcon(props) {
  return (0, import_jsx_runtime151.jsx)(
    "svg",
    {
      ...props,
      "data-avatar-placeholder-icon": true,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, import_jsx_runtime151.jsx)(
        "path",
        {
          d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}

// node_modules/@mantine/core/esm/components/Avatar/get-initials/get-initials.mjs
function getInitials(name, limit = 2) {
  const splitted = name.split(" ");
  if (splitted.length === 1) {
    return name.slice(0, limit).toUpperCase();
  }
  return splitted.map((word) => word[0]).slice(0, limit).join("").toUpperCase();
}

// node_modules/@mantine/core/esm/components/Avatar/get-initials-color/get-initials-color.mjs
function hashCode(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
var defaultColors = [
  "blue",
  "cyan",
  "grape",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "red",
  "teal",
  "violet"
];
function getInitialsColor(name, colors = defaultColors) {
  const hash = hashCode(getInitials(name));
  const index5 = Math.abs(hash) % colors.length;
  return colors[index5];
}

// node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs
var defaultProps61 = {};
var varsResolver28 = createVarsResolver(
  (theme, { size: size4, radius, variant, gradient, color, autoContrast, name, allowedInitialsColors }) => {
    const _color = color === "initials" && typeof name === "string" ? getInitialsColor(name, allowedInitialsColors) : color;
    const colors = theme.variantColorResolver({
      color: _color || "gray",
      theme,
      gradient,
      variant: variant || "light",
      autoContrast
    });
    return {
      root: {
        "--avatar-size": getSize(size4, "avatar-size"),
        "--avatar-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--avatar-bg": _color || variant ? colors.background : void 0,
        "--avatar-color": _color || variant ? colors.color : void 0,
        "--avatar-bd": _color || variant ? colors.border : void 0
      }
    };
  }
);
var Avatar = polymorphicFactory((_props, ref) => {
  const props = useProps("Avatar", defaultProps61, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    src,
    alt,
    radius,
    color,
    gradient,
    imageProps,
    children,
    autoContrast,
    mod,
    name,
    allowedInitialsColors,
    ...others
  } = props;
  const ctx = useAvatarGroupContext();
  const [error2, setError] = (0, import_react238.useState)(!src);
  const getStyles2 = useStyles({
    name: "Avatar",
    props,
    classes: classes27,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver28
  });
  (0, import_react238.useEffect)(() => setError(!src), [src]);
  return (0, import_jsx_runtime152.jsx)(
    Box,
    {
      ...getStyles2("root"),
      mod: [{ "within-group": ctx.withinGroup }, mod],
      ref,
      ...others,
      children: error2 ? (0, import_jsx_runtime152.jsx)("span", { ...getStyles2("placeholder"), title: alt, children: children || typeof name === "string" && getInitials(name) || (0, import_jsx_runtime152.jsx)(AvatarPlaceholderIcon, {}) }) : (0, import_jsx_runtime152.jsx)(
        "img",
        {
          ...imageProps,
          ...getStyles2("image"),
          src,
          alt,
          onError: (event) => {
            var _a;
            setError(true);
            (_a = imageProps == null ? void 0 : imageProps.onError) == null ? void 0 : _a.call(imageProps, event);
          }
        }
      )
    }
  );
});
Avatar.classes = classes27;
Avatar.displayName = "@mantine/core/Avatar";
Avatar.Group = AvatarGroup;

// node_modules/@mantine/core/esm/components/BackgroundImage/BackgroundImage.mjs
var import_jsx_runtime153 = __toESM(require_jsx_runtime(), 1);
var import_react239 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/BackgroundImage/BackgroundImage.module.css.mjs
var classes28 = { "root": "m_2ce0de02" };

// node_modules/@mantine/core/esm/components/BackgroundImage/BackgroundImage.mjs
var defaultProps62 = {};
var varsResolver29 = createVarsResolver((_, { radius }) => ({
  root: { "--bi-radius": radius === void 0 ? void 0 : getRadius(radius) }
}));
var BackgroundImage = polymorphicFactory((_props, ref) => {
  const props = useProps("BackgroundImage", defaultProps62, _props);
  const { classNames, className, style, styles, unstyled, vars, radius, src, variant, ...others } = props;
  const getStyles2 = useStyles({
    name: "BackgroundImage",
    props,
    classes: classes28,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver29
  });
  return (0, import_jsx_runtime153.jsx)(
    Box,
    {
      ref,
      variant,
      ...getStyles2("root", { style: { backgroundImage: `url(${src})` } }),
      ...others
    }
  );
});
BackgroundImage.classes = classes28;
BackgroundImage.displayName = "@mantine/core/BackgroundImage";

// node_modules/@mantine/core/esm/components/Badge/Badge.mjs
var import_jsx_runtime154 = __toESM(require_jsx_runtime(), 1);
var import_react240 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Badge/Badge.module.css.mjs
var classes29 = { "root": "m_347db0ec", "root--dot": "m_fbd81e3d", "label": "m_5add502a", "section": "m_91fdda9b" };

// node_modules/@mantine/core/esm/components/Badge/Badge.mjs
var defaultProps63 = {};
var varsResolver30 = createVarsResolver(
  (theme, { radius, color, gradient, variant, size: size4, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--badge-height": getSize(size4, "badge-height"),
        "--badge-padding-x": getSize(size4, "badge-padding-x"),
        "--badge-fz": getSize(size4, "badge-fz"),
        "--badge-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--badge-bg": color || variant ? colors.background : void 0,
        "--badge-color": color || variant ? colors.color : void 0,
        "--badge-bd": color || variant ? colors.border : void 0,
        "--badge-dot-color": variant === "dot" ? getThemeColor(color, theme) : void 0
      }
    };
  }
);
var Badge = polymorphicFactory((_props, ref) => {
  const props = useProps("Badge", defaultProps63, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth,
    autoContrast,
    circle,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Badge",
    props,
    classes: classes29,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver30
  });
  return (0, import_jsx_runtime154.jsxs)(
    Box,
    {
      variant,
      mod: [{ block: fullWidth, circle }, mod],
      ...getStyles2("root", { variant }),
      ref,
      ...others,
      children: [
        leftSection && (0, import_jsx_runtime154.jsx)("span", { ...getStyles2("section"), "data-position": "left", children: leftSection }),
        (0, import_jsx_runtime154.jsx)("span", { ...getStyles2("label"), children }),
        rightSection && (0, import_jsx_runtime154.jsx)("span", { ...getStyles2("section"), "data-position": "right", children: rightSection })
      ]
    }
  );
});
Badge.classes = classes29;
Badge.displayName = "@mantine/core/Badge";

// node_modules/@mantine/core/esm/components/Blockquote/Blockquote.mjs
var import_jsx_runtime155 = __toESM(require_jsx_runtime(), 1);
var import_react241 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Blockquote/Blockquote.module.css.mjs
var classes30 = { "root": "m_ddec01c0", "icon": "m_dde7bd57", "cite": "m_dde51a35" };

// node_modules/@mantine/core/esm/components/Blockquote/Blockquote.mjs
var defaultProps64 = {
  iconSize: 48
};
var varsResolver31 = createVarsResolver((theme, { color, iconSize, radius }) => {
  const darkParsed = parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: "dark"
  });
  const lightParsed = parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: "light"
  });
  return {
    root: {
      "--bq-bg-light": rgba(lightParsed.value, 0.07),
      "--bq-bg-dark": rgba(darkParsed.value, 0.06),
      "--bq-bd": getThemeColor(color, theme),
      "--bq-icon-size": rem(iconSize),
      "--bq-radius": getRadius(radius)
    }
  };
});
var Blockquote = factory((_props, ref) => {
  const props = useProps("Blockquote", defaultProps64, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    icon,
    iconSize,
    cite,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Blockquote",
    classes: classes30,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver31
  });
  return (0, import_jsx_runtime155.jsxs)(Box, { component: "blockquote", ref, ...getStyles2("root"), ...others, children: [
    icon && (0, import_jsx_runtime155.jsx)("span", { ...getStyles2("icon"), children: icon }),
    children,
    cite && (0, import_jsx_runtime155.jsx)("cite", { ...getStyles2("cite"), children: cite })
  ] });
});
Blockquote.classes = classes30;
Blockquote.displayName = "@mantine/core/Blockquote";

// node_modules/@mantine/core/esm/components/Breadcrumbs/Breadcrumbs.mjs
var import_jsx_runtime156 = __toESM(require_jsx_runtime(), 1);
var import_react242 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Breadcrumbs/Breadcrumbs.module.css.mjs
var classes31 = { "root": "m_8b3717df", "breadcrumb": "m_f678d540", "separator": "m_3b8f2208" };

// node_modules/@mantine/core/esm/components/Breadcrumbs/Breadcrumbs.mjs
var defaultProps65 = {
  separator: "/"
};
var varsResolver32 = createVarsResolver((_, { separatorMargin }) => ({
  root: {
    "--bc-separator-margin": getSpacing(separatorMargin)
  }
}));
var Breadcrumbs = factory((_props, ref) => {
  const props = useProps("Breadcrumbs", defaultProps65, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    separator,
    separatorMargin,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Breadcrumbs",
    classes: classes31,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver32
  });
  const items = import_react242.Children.toArray(children).reduce((acc, child, index5, array) => {
    var _a;
    const item = isElement(child) ? (0, import_react242.cloneElement)(child, {
      ...getStyles2("breadcrumb", { className: (_a = child.props) == null ? void 0 : _a.className }),
      key: index5
    }) : (0, import_react242.createElement)("div", { ...getStyles2("breadcrumb"), key: index5 }, child);
    acc.push(item);
    if (index5 !== array.length - 1) {
      acc.push(
        (0, import_react242.createElement)(Box, { ...getStyles2("separator"), key: `separator-${index5}` }, separator)
      );
    }
    return acc;
  }, []);
  return (0, import_jsx_runtime156.jsx)(Box, { ref, ...getStyles2("root"), ...others, children: items });
});
Breadcrumbs.classes = classes31;
Breadcrumbs.displayName = "@mantine/core/Breadcrumbs";

// node_modules/@mantine/core/esm/components/Burger/Burger.mjs
var import_jsx_runtime157 = __toESM(require_jsx_runtime(), 1);
var import_react243 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Burger/Burger.module.css.mjs
var classes32 = { "root": "m_fea6bf1a", "burger": "m_d4fb9cad" };

// node_modules/@mantine/core/esm/components/Burger/Burger.mjs
var defaultProps66 = {};
var varsResolver33 = createVarsResolver(
  (theme, { color, size: size4, lineSize, transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--burger-color": color ? getThemeColor(color, theme) : void 0,
      "--burger-size": getSize(size4, "burger-size"),
      "--burger-line-size": lineSize ? rem(lineSize) : void 0,
      "--burger-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--burger-transition-timing-function": transitionTimingFunction
    }
  })
);
var Burger = factory((_props, ref) => {
  const props = useProps("Burger", defaultProps66, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    children,
    transitionDuration,
    transitionTimingFunction,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Burger",
    classes: classes32,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver33
  });
  return (0, import_jsx_runtime157.jsxs)(UnstyledButton, { ...getStyles2("root"), ref, ...others, children: [
    (0, import_jsx_runtime157.jsx)(Box, { mod: ["reduce-motion", { opened }], ...getStyles2("burger") }),
    children
  ] });
});
Burger.classes = classes32;
Burger.displayName = "@mantine/core/Burger";

// node_modules/@mantine/core/esm/components/Button/Button.mjs
var import_jsx_runtime159 = __toESM(require_jsx_runtime(), 1);
var import_react245 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
var import_jsx_runtime158 = __toESM(require_jsx_runtime(), 1);
var import_react244 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs
var classes33 = { "root": "m_77c9d27d", "inner": "m_80f1301b", "label": "m_811560b9", "section": "m_a74036a", "loader": "m_a25b86ee", "group": "m_80d6d844" };

// node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
var defaultProps67 = {
  orientation: "horizontal"
};
var varsResolver34 = createVarsResolver((_, { borderWidth }) => ({
  group: { "--button-border-width": rem(borderWidth) }
}));
var ButtonGroup = factory((_props, ref) => {
  const props = useProps("ButtonGroup", defaultProps67, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps("ButtonGroup", defaultProps67, _props);
  const getStyles2 = useStyles({
    name: "ButtonGroup",
    props,
    classes: classes33,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver34,
    rootSelector: "group"
  });
  return (0, import_jsx_runtime158.jsx)(
    Box,
    {
      ...getStyles2("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ButtonGroup.classes = classes33;
ButtonGroup.displayName = "@mantine/core/ButtonGroup";

// node_modules/@mantine/core/esm/components/Button/Button.mjs
var loaderTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${rem(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
};
var defaultProps68 = {};
var varsResolver35 = createVarsResolver(
  (theme, { radius, color, gradient, variant, size: size4, justify, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size4, "button-height"),
        "--button-padding-x": getSize(size4, "button-padding-x"),
        "--button-fz": (size4 == null ? void 0 : size4.includes("compact")) ? getFontSize(size4.replace("compact-", "")) : getFontSize(size4),
        "--button-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : void 0,
        "--button-hover-color": color || variant ? colors.hoverColor : void 0
      }
    };
  }
);
var Button = polymorphicFactory((_props, ref) => {
  const props = useProps("Button", defaultProps68, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Button",
    props,
    classes: classes33,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver35
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return (0, import_jsx_runtime159.jsxs)(
    UnstyledButton,
    {
      ref,
      ...getStyles2("root", { active: !disabled && !loading && !dataDisabled }),
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        },
        mod
      ],
      ...others,
      children: [
        (0, import_jsx_runtime159.jsx)(Transition, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => (0, import_jsx_runtime159.jsx)(Box, { component: "span", ...getStyles2("loader", { style: transitionStyles }), "aria-hidden": true, children: (0, import_jsx_runtime159.jsx)(
          Loader,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...loaderProps
          }
        ) }) }),
        (0, import_jsx_runtime159.jsxs)("span", { ...getStyles2("inner"), children: [
          leftSection && (0, import_jsx_runtime159.jsx)(Box, { component: "span", ...getStyles2("section"), mod: { position: "left" }, children: leftSection }),
          (0, import_jsx_runtime159.jsx)(Box, { component: "span", mod: { loading }, ...getStyles2("label"), children }),
          rightSection && (0, import_jsx_runtime159.jsx)(Box, { component: "span", ...getStyles2("section"), mod: { position: "right" }, children: rightSection })
        ] })
      ]
    }
  );
});
Button.classes = classes33;
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup;

// node_modules/@mantine/core/esm/components/Card/Card.mjs
var import_jsx_runtime162 = __toESM(require_jsx_runtime(), 1);
var import_react248 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Card/Card.context.mjs
var import_react246 = __toESM(require_react(), 1);
var import_jsx_runtime160 = __toESM(require_jsx_runtime(), 1);
var [CardProvider, useCardContext] = createSafeContext(
  "Card component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs
var import_jsx_runtime161 = __toESM(require_jsx_runtime(), 1);
var import_react247 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs
var classes34 = { "root": "m_e615b15f", "section": "m_599a2148" };

// node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs
var defaultProps69 = {};
var CardSection = polymorphicFactory((_props, ref) => {
  const props = useProps("CardSection", defaultProps69, _props);
  const { classNames, className, style, styles, vars, withBorder, inheritPadding, mod, ...others } = props;
  const ctx = useCardContext();
  return (0, import_jsx_runtime161.jsx)(
    Box,
    {
      ref,
      mod: [{ "with-border": withBorder, "inherit-padding": inheritPadding }, mod],
      ...ctx.getStyles("section", { className, style, styles, classNames }),
      ...others
    }
  );
});
CardSection.classes = classes34;
CardSection.displayName = "@mantine/core/CardSection";

// node_modules/@mantine/core/esm/components/Card/Card.mjs
var defaultProps70 = {};
var varsResolver36 = createVarsResolver((_, { padding }) => ({
  root: {
    "--card-padding": getSpacing(padding)
  }
}));
var Card = polymorphicFactory((_props, ref) => {
  const props = useProps("Card", defaultProps70, _props);
  const { classNames, className, style, styles, unstyled, vars, children, padding, ...others } = props;
  const getStyles2 = useStyles({
    name: "Card",
    props,
    classes: classes34,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver36
  });
  const _children = import_react248.Children.toArray(children);
  const content = _children.map((child, index5) => {
    if (typeof child === "object" && child && "type" in child && child.type === CardSection) {
      return (0, import_react248.cloneElement)(child, {
        "data-first-section": index5 === 0 || void 0,
        "data-last-section": index5 === _children.length - 1 || void 0
      });
    }
    return child;
  });
  return (0, import_jsx_runtime162.jsx)(CardProvider, { value: { getStyles: getStyles2 }, children: (0, import_jsx_runtime162.jsx)(Paper, { ref, unstyled, ...getStyles2("root"), ...others, children: content }) });
});
Card.classes = classes34;
Card.displayName = "@mantine/core/Card";
Card.Section = CardSection;

// node_modules/@mantine/core/esm/components/Center/Center.mjs
var import_jsx_runtime163 = __toESM(require_jsx_runtime(), 1);
var import_react249 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Center/Center.module.css.mjs
var classes35 = { "root": "m_4451eb3a" };

// node_modules/@mantine/core/esm/components/Center/Center.mjs
var defaultProps71 = {};
var Center = polymorphicFactory((_props, ref) => {
  const props = useProps("Center", defaultProps71, _props);
  const { classNames, className, style, styles, unstyled, vars, inline: inline4, mod, ...others } = props;
  const getStyles2 = useStyles({
    name: "Center",
    props,
    classes: classes35,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  return (0, import_jsx_runtime163.jsx)(Box, { ref, mod: [{ inline: inline4 }, mod], ...getStyles2("root"), ...others });
});
Center.classes = classes35;
Center.displayName = "@mantine/core/Center";

// node_modules/@mantine/core/esm/components/Chip/Chip.mjs
var import_jsx_runtime166 = __toESM(require_jsx_runtime(), 1);
var import_react252 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Chip/ChipGroup.context.mjs
var import_react250 = __toESM(require_react(), 1);
var import_jsx_runtime164 = __toESM(require_jsx_runtime(), 1);
var [ChipGroupProvider, useChipGroupContext] = createOptionalContext();

// node_modules/@mantine/core/esm/components/Chip/ChipGroup/ChipGroup.mjs
var import_jsx_runtime165 = __toESM(require_jsx_runtime(), 1);
var import_react251 = __toESM(require_react(), 1);
var defaultProps72 = {};
function ChipGroup(props) {
  const { value, defaultValue, onChange, multiple, children } = useProps(
    "ChipGroup",
    defaultProps72,
    props
  );
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isChipSelected = (val) => Array.isArray(_value) ? _value.includes(val) : val === _value;
  const handleChange = (event) => {
    const val = event.currentTarget.value;
    if (Array.isArray(_value)) {
      setValue(_value.includes(val) ? _value.filter((v) => v !== val) : [..._value, val]);
    } else {
      setValue(val);
    }
  };
  return (0, import_jsx_runtime165.jsx)(ChipGroupProvider, { value: { isChipSelected, onChange: handleChange, multiple }, children });
}
ChipGroup.displayName = "@mantine/core/ChipGroup";

// node_modules/@mantine/core/esm/components/Chip/Chip.module.css.mjs
var classes36 = { "root": "m_f59ffda3", "label": "m_be049a53", "label--outline": "m_3904c1af", "label--filled": "m_fa109255", "label--light": "m_f7e165c3", "iconWrapper": "m_9ac86df9", "checkIcon": "m_d6d72580", "input": "m_bde07329" };

// node_modules/@mantine/core/esm/components/Chip/Chip.mjs
var defaultProps73 = {
  type: "checkbox"
};
var varsResolver37 = createVarsResolver(
  (theme, { size: size4, radius, variant, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--chip-fz": getFontSize(size4),
        "--chip-size": getSize(size4, "chip-size"),
        "--chip-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--chip-checked-padding": getSize(size4, "chip-checked-padding"),
        "--chip-padding": getSize(size4, "chip-padding"),
        "--chip-icon-size": getSize(size4, "chip-icon-size"),
        "--chip-bg": color || variant ? colors.background : void 0,
        "--chip-hover": color || variant ? colors.hover : void 0,
        "--chip-color": color || variant ? colors.color : void 0,
        "--chip-bd": color || variant ? colors.border : void 0,
        "--chip-spacing": getSize(size4, "chip-spacing")
      }
    };
  }
);
var Chip = factory((_props, ref) => {
  const props = useProps("Chip", defaultProps73, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    checked,
    defaultChecked,
    onChange,
    value,
    wrapperProps,
    type,
    disabled,
    children,
    size: size4,
    variant,
    icon,
    rootRef,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Chip",
    classes: classes36,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver37
  });
  const ctx = useChipGroupContext();
  const uuid = useId(id);
  const { styleProps, rest } = extractStyleProps(others);
  const [_value, setValue] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange
  });
  const contextProps = ctx ? {
    checked: ctx.isChipSelected(value),
    onChange: (event) => {
      ctx.onChange(event);
      onChange == null ? void 0 : onChange(event.currentTarget.checked);
    },
    type: ctx.multiple ? "checkbox" : "radio"
  } : {};
  const _checked = contextProps.checked || _value;
  return (0, import_jsx_runtime166.jsxs)(
    Box,
    {
      size: size4,
      variant,
      ref: rootRef,
      mod,
      ...getStyles2("root"),
      ...styleProps,
      ...wrapperProps,
      children: [
        (0, import_jsx_runtime166.jsx)(
          "input",
          {
            type,
            ...getStyles2("input"),
            checked: _checked,
            onChange: (event) => setValue(event.currentTarget.checked),
            id: uuid,
            disabled,
            ref,
            value,
            ...contextProps,
            ...rest
          }
        ),
        (0, import_jsx_runtime166.jsxs)(
          "label",
          {
            htmlFor: uuid,
            "data-checked": _checked || void 0,
            "data-disabled": disabled || void 0,
            ...getStyles2("label", { variant: variant || "filled" }),
            children: [
              _checked && (0, import_jsx_runtime166.jsx)("span", { ...getStyles2("iconWrapper"), children: icon || (0, import_jsx_runtime166.jsx)(CheckIcon, { ...getStyles2("checkIcon") }) }),
              (0, import_jsx_runtime166.jsx)("span", { children })
            ]
          }
        )
      ]
    }
  );
});
Chip.classes = classes36;
Chip.displayName = "@mantine/core/Chip";
Chip.Group = ChipGroup;

// node_modules/@mantine/core/esm/components/Code/Code.mjs
var import_jsx_runtime167 = __toESM(require_jsx_runtime(), 1);
var import_react253 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Code/Code.module.css.mjs
var classes37 = { "root": "m_b183c0a2" };

// node_modules/@mantine/core/esm/components/Code/Code.mjs
var defaultProps74 = {};
var varsResolver38 = createVarsResolver((theme, { color }) => ({
  root: {
    "--code-bg": color ? getThemeColor(color, theme) : void 0
  }
}));
var Code = factory((_props, ref) => {
  const props = useProps("Code", defaultProps74, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    block,
    variant,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Code",
    props,
    classes: classes37,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver38
  });
  return (0, import_jsx_runtime167.jsx)(
    Box,
    {
      component: block ? "pre" : "code",
      variant,
      ref,
      mod: [{ block }, mod],
      ...getStyles2("root"),
      ...others,
      dir: "ltr"
    }
  );
});
Code.classes = classes37;
Code.displayName = "@mantine/core/Code";

// node_modules/@mantine/core/esm/components/ColorPicker/ColorPicker.mjs
var import_jsx_runtime176 = __toESM(require_jsx_runtime(), 1);
var import_react262 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ColorSwatch/ColorSwatch.mjs
var import_jsx_runtime168 = __toESM(require_jsx_runtime(), 1);
var import_react254 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ColorSwatch/ColorSwatch.module.css.mjs
var classes38 = { "root": "m_de3d2490", "colorOverlay": "m_862f3d1b", "shadowOverlay": "m_98ae7f22", "alphaOverlay": "m_95709ac0", "childrenOverlay": "m_93e74e3" };

// node_modules/@mantine/core/esm/components/ColorSwatch/ColorSwatch.mjs
var defaultProps75 = {
  withShadow: true
};
var varsResolver39 = createVarsResolver((_, { radius, size: size4 }) => ({
  root: {
    "--cs-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--cs-size": rem(size4)
  }
}));
var ColorSwatch = polymorphicFactory((_props, ref) => {
  const props = useProps("ColorSwatch", defaultProps75, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    size: size4,
    radius,
    withShadow,
    children,
    variant,
    ...others
  } = useProps("ColorSwatch", defaultProps75, props);
  const getStyles2 = useStyles({
    name: "ColorSwatch",
    props,
    classes: classes38,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver39
  });
  return (0, import_jsx_runtime168.jsxs)(
    Box,
    {
      ref,
      variant,
      size: size4,
      ...getStyles2("root", { focusable: true }),
      ...others,
      children: [
        (0, import_jsx_runtime168.jsx)("span", { ...getStyles2("alphaOverlay") }),
        withShadow && (0, import_jsx_runtime168.jsx)("span", { ...getStyles2("shadowOverlay") }),
        (0, import_jsx_runtime168.jsx)("span", { ...getStyles2("colorOverlay", { style: { backgroundColor: color } }) }),
        (0, import_jsx_runtime168.jsx)("span", { ...getStyles2("childrenOverlay"), children })
      ]
    }
  );
});
ColorSwatch.classes = classes38;
ColorSwatch.displayName = "@mantine/core/ColorSwatch";

// node_modules/@mantine/core/esm/components/ColorPicker/AlphaSlider/AlphaSlider.mjs
var import_jsx_runtime172 = __toESM(require_jsx_runtime(), 1);
var import_react258 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ColorPicker/ColorSlider/ColorSlider.mjs
var import_jsx_runtime171 = __toESM(require_jsx_runtime(), 1);
var import_react257 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ColorPicker/ColorPicker.context.mjs
var import_react255 = __toESM(require_react(), 1);
var import_jsx_runtime169 = __toESM(require_jsx_runtime(), 1);
var [ColorPickerProvider, useColorPickerContext] = createOptionalContext(null);

// node_modules/@mantine/core/esm/components/ColorPicker/Thumb/Thumb.mjs
var import_jsx_runtime170 = __toESM(require_jsx_runtime(), 1);
var import_react256 = __toESM(require_react(), 1);
var Thumb2 = (0, import_react256.forwardRef)(({ position, ...others }, ref) => (0, import_jsx_runtime170.jsx)(
  Box,
  {
    ref,
    __vars: {
      "--thumb-y-offset": `${position.y * 100}%`,
      "--thumb-x-offset": `${position.x * 100}%`
    },
    ...others
  }
));
Thumb2.displayName = "@mantine/core/ColorPickerThumb";

// node_modules/@mantine/core/esm/components/ColorPicker/ColorPicker.module.css.mjs
var classes39 = { "wrapper": "m_fee9c77", "preview": "m_9dddfbac", "body": "m_bffecc3e", "sliders": "m_3283bb96", "thumb": "m_40d572ba", "swatch": "m_d8ee6fd8", "swatches": "m_5711e686", "saturation": "m_202a296e", "saturationOverlay": "m_11b3db02", "slider": "m_d856d47d", "sliderOverlay": "m_8f327113" };

// node_modules/@mantine/core/esm/components/ColorPicker/ColorSlider/ColorSlider.mjs
var defaultProps76 = {};
var ColorSlider = factory((_props, ref) => {
  var _a;
  const props = useProps("ColorSlider", defaultProps76, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onChange,
    onChangeEnd,
    maxValue,
    round: round3,
    size: size4 = "md",
    focusable: focusable2 = true,
    value,
    overlays,
    thumbColor = "transparent",
    onScrubStart,
    onScrubEnd,
    __staticSelector = "ColorPicker",
    ...others
  } = props;
  const _getStyles = useStyles({
    name: __staticSelector,
    classes: classes39,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  const ctxGetStyles = (_a = useColorPickerContext()) == null ? void 0 : _a.getStyles;
  const getStyles2 = ctxGetStyles || _getStyles;
  const theme = useMantineTheme();
  const [position, setPosition] = (0, import_react257.useState)({ y: 0, x: value / maxValue });
  const positionRef = (0, import_react257.useRef)(position);
  const getChangeValue2 = (val) => round3 ? Math.round(val * maxValue) : val * maxValue;
  const { ref: sliderRef } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange == null ? void 0 : onChange(getChangeValue2(x));
    },
    {
      onScrubEnd: () => {
        const { x } = positionRef.current;
        onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue2(x));
        onScrubEnd == null ? void 0 : onScrubEnd();
      },
      onScrubStart
    }
  );
  useDidUpdate(() => {
    setPosition({ y: 0, x: value / maxValue });
  }, [value]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange == null ? void 0 : onChange(getChangeValue2(_position.x));
    onChangeEnd == null ? void 0 : onChangeEnd(getChangeValue2(_position.x));
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight": {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }
      case "ArrowLeft": {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };
  const layers = overlays.map((overlay, index5) => (0, import_react257.createElement)("div", { ...getStyles2("sliderOverlay"), style: overlay, key: index5 }));
  return (0, import_jsx_runtime171.jsxs)(
    Box,
    {
      ...others,
      ref: useMergedRef(sliderRef, ref),
      ...getStyles2("slider"),
      role: "slider",
      "aria-valuenow": value,
      "aria-valuemax": maxValue,
      "aria-valuemin": 0,
      tabIndex: focusable2 ? 0 : -1,
      onKeyDown: handleKeyDown,
      "data-focus-ring": theme.focusRing,
      __vars: {
        "--cp-thumb-size": `var(--cp-thumb-size-${size4})`
      },
      children: [
        layers,
        (0, import_jsx_runtime171.jsx)(
          Thumb2,
          {
            position,
            ...getStyles2("thumb", { style: { top: rem(1), background: thumbColor } })
          }
        )
      ]
    }
  );
});
ColorSlider.displayName = "@mantine/core/ColorSlider";

// node_modules/@mantine/core/esm/components/ColorPicker/converters/parsers.mjs
function round2(number, digits = 0, base = 10 ** digits) {
  return Math.round(base * number) / base;
}
function hslaToHsva({ h, s, l, a }) {
  const ss = s * ((l < 50 ? l : 100 - l) / 100);
  return {
    h,
    s: ss > 0 ? 2 * ss / (l + ss) * 100 : 0,
    v: l + ss,
    a
  };
}
var angleUnits = {
  grad: 360 / 400,
  turn: 360,
  rad: 360 / (Math.PI * 2)
};
function parseHue(value, unit = "deg") {
  return Number(value) * (angleUnits[unit] || 1);
}
var HSL_REGEXP = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function parseHsla(color) {
  const match = HSL_REGEXP.exec(color);
  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === void 0 ? 1 : Number(match[5]) / (match[6] ? 100 : 1)
  });
}
function rgbaToHsva({ r: r2, g, b, a }) {
  const max2 = Math.max(r2, g, b);
  const delta = max2 - Math.min(r2, g, b);
  const hh = delta ? max2 === r2 ? (g - b) / delta : max2 === g ? 2 + (b - r2) / delta : 4 + (r2 - g) / delta : 0;
  return {
    h: round2(60 * (hh < 0 ? hh + 6 : hh), 3),
    s: round2(max2 ? delta / max2 * 100 : 0, 3),
    v: round2(max2 / 255 * 100, 3),
    a
  };
}
function parseHex(color) {
  const hex = color[0] === "#" ? color.slice(1) : color;
  if (hex.length === 3) {
    return rgbaToHsva({
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: 1
    });
  }
  return rgbaToHsva({
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: 1
  });
}
function parseHexa(color) {
  const hex = color[0] === "#" ? color.slice(1) : color;
  const roundA = (a2) => round2(parseInt(a2, 16) / 255, 3);
  if (hex.length === 4) {
    const withoutOpacity2 = hex.slice(0, 3);
    const a2 = roundA(hex[3] + hex[3]);
    const hsvaColor2 = { ...parseHex(withoutOpacity2), a: a2 };
    return hsvaColor2;
  }
  const withoutOpacity = hex.slice(0, 6);
  const a = roundA(hex.slice(6, 8));
  const hsvaColor = { ...parseHex(withoutOpacity), a };
  return hsvaColor;
}
var RGB_REGEXP = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
function parseRgba(color) {
  const match = RGB_REGEXP.exec(color);
  if (!match) {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? 100 / 255 : 1),
    g: Number(match[3]) / (match[4] ? 100 / 255 : 1),
    b: Number(match[5]) / (match[6] ? 100 / 255 : 1),
    a: match[7] === void 0 ? 1 : Number(match[7]) / (match[8] ? 100 : 1)
  });
}
var VALIDATION_REGEXP = {
  hex: /^#?([0-9A-F]{3}){1,2}$/i,
  hexa: /^#?([0-9A-F]{4}){1,2}$/i,
  rgb: /^rgb\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  rgba: /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,
  hsl: /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i,
  hsla: /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/i
};
var CONVERTERS = {
  hex: parseHex,
  hexa: parseHexa,
  rgb: parseRgba,
  rgba: parseRgba,
  hsl: parseHsla,
  hsla: parseHsla
};
function isColorValid(color) {
  for (const [, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(color)) {
      return true;
    }
  }
  return false;
}
function parseColor(color) {
  if (typeof color !== "string") {
    return { h: 0, s: 0, v: 0, a: 1 };
  }
  if (color === "transparent") {
    return { h: 0, s: 0, v: 0, a: 0 };
  }
  const trimmed = color.trim();
  for (const [rule, regexp] of Object.entries(VALIDATION_REGEXP)) {
    if (regexp.test(trimmed)) {
      return CONVERTERS[rule](trimmed);
    }
  }
  return { h: 0, s: 0, v: 0, a: 1 };
}

// node_modules/@mantine/core/esm/components/ColorPicker/AlphaSlider/AlphaSlider.mjs
var defaultProps77 = {};
var AlphaSlider = (0, import_react258.forwardRef)((props, ref) => {
  const { value, onChange, onChangeEnd, color, ...others } = useProps(
    "AlphaSlider",
    defaultProps77,
    props
  );
  return (0, import_jsx_runtime172.jsx)(
    ColorSlider,
    {
      ...others,
      ref,
      value,
      onChange: (val) => onChange == null ? void 0 : onChange(round2(val, 2)),
      onChangeEnd: (val) => onChangeEnd == null ? void 0 : onChangeEnd(round2(val, 2)),
      maxValue: 1,
      round: false,
      "data-alpha": true,
      overlays: [
        {
          backgroundImage: "linear-gradient(45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--slider-checkers) 75%), linear-gradient(-45deg, var(--mantine-color-body) 75%, var(--slider-checkers) 75%)",
          backgroundSize: `${rem(8)} ${rem(8)}`,
          backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} ${rem(-4)}, ${rem(-4)} 0`
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(
            4
          )} inset`
        }
      ]
    }
  );
});
AlphaSlider.displayName = "@mantine/core/AlphaSlider";

// node_modules/@mantine/core/esm/components/ColorPicker/converters/converters.mjs
function hsvaToRgbaObject({ h, s, v, a }) {
  const _h = h / 360 * 6;
  const _s = s / 100;
  const _v = v / 100;
  const hh = Math.floor(_h);
  const l = _v * (1 - _s);
  const c = _v * (1 - (_h - hh) * _s);
  const d = _v * (1 - (1 - _h + hh) * _s);
  const module = hh % 6;
  return {
    r: round2([_v, c, l, l, d, _v][module] * 255),
    g: round2([d, _v, _v, c, l, l][module] * 255),
    b: round2([l, l, d, _v, _v, c][module] * 255),
    a: round2(a, 2)
  };
}
function hsvaToRgba(color, includeAlpha) {
  const { r: r2, g, b, a } = hsvaToRgbaObject(color);
  if (!includeAlpha) {
    return `rgb(${r2}, ${g}, ${b})`;
  }
  return `rgba(${r2}, ${g}, ${b}, ${round2(a, 2)})`;
}
function hsvaToHsl({ h, s, v, a }, includeAlpha) {
  const hh = (200 - s) * v / 100;
  const result = {
    h: Math.round(h),
    s: Math.round(hh > 0 && hh < 200 ? s * v / 100 / (hh <= 100 ? hh : 200 - hh) * 100 : 0),
    l: Math.round(hh / 2)
  };
  if (!includeAlpha) {
    return `hsl(${result.h}, ${result.s}%, ${result.l}%)`;
  }
  return `hsla(${result.h}, ${result.s}%, ${result.l}%, ${round2(a, 2)})`;
}
function formatHexPart(number) {
  const hex = number.toString(16);
  return hex.length < 2 ? `0${hex}` : hex;
}
function hsvaToHex(color) {
  const { r: r2, g, b } = hsvaToRgbaObject(color);
  return `#${formatHexPart(r2)}${formatHexPart(g)}${formatHexPart(b)}`;
}
function hsvaToHexa(color) {
  const a = Math.round(color.a * 255);
  return `${hsvaToHex(color)}${formatHexPart(a)}`;
}
var CONVERTERS2 = {
  hex: hsvaToHex,
  hexa: (color) => hsvaToHexa(color),
  rgb: (color) => hsvaToRgba(color, false),
  rgba: (color) => hsvaToRgba(color, true),
  hsl: (color) => hsvaToHsl(color, false),
  hsla: (color) => hsvaToHsl(color, true)
};
function convertHsvaTo(format2, color) {
  if (!color) {
    return "#000000";
  }
  if (!(format2 in CONVERTERS2)) {
    return CONVERTERS2.hex(color);
  }
  return CONVERTERS2[format2](color);
}

// node_modules/@mantine/core/esm/components/ColorPicker/HueSlider/HueSlider.mjs
var import_jsx_runtime173 = __toESM(require_jsx_runtime(), 1);
var import_react259 = __toESM(require_react(), 1);
var HueSlider = (0, import_react259.forwardRef)((props, ref) => {
  const { value, onChange, onChangeEnd, color, ...others } = useProps("HueSlider", {}, props);
  return (0, import_jsx_runtime173.jsx)(
    ColorSlider,
    {
      ...others,
      ref,
      value,
      onChange,
      onChangeEnd,
      maxValue: 360,
      thumbColor: `hsl(${value}, 100%, 50%)`,
      round: true,
      "data-hue": true,
      overlays: [
        {
          backgroundImage: "linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))"
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(
            4
          )} inset`
        }
      ]
    }
  );
});
HueSlider.displayName = "@mantine/core/HueSlider";

// node_modules/@mantine/core/esm/components/ColorPicker/Saturation/Saturation.mjs
var import_jsx_runtime174 = __toESM(require_jsx_runtime(), 1);
var import_react260 = __toESM(require_react(), 1);
function Saturation({
  className,
  onChange,
  onChangeEnd,
  value,
  saturationLabel,
  focusable: focusable2 = true,
  size: size4,
  color,
  onScrubStart,
  onScrubEnd,
  ...others
}) {
  const { getStyles: getStyles2 } = useColorPickerContext();
  const [position, setPosition] = (0, import_react260.useState)({ x: value.s / 100, y: 1 - value.v / 100 });
  const positionRef = (0, import_react260.useRef)(position);
  const { ref } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
        onScrubEnd == null ? void 0 : onScrubEnd();
      },
      onScrubStart
    }
  );
  (0, import_react260.useEffect)(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);
  const handleArrow = (event, pos) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
    onChangeEnd({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp": {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }
      case "ArrowDown": {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }
      case "ArrowRight": {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }
      case "ArrowLeft": {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };
  return (0, import_jsx_runtime174.jsxs)(
    Box,
    {
      ...getStyles2("saturation"),
      ref,
      ...others,
      role: "slider",
      "aria-label": saturationLabel,
      "aria-valuenow": position.x,
      "aria-valuetext": convertHsvaTo("rgba", value),
      tabIndex: focusable2 ? 0 : -1,
      onKeyDown: handleKeyDown,
      children: [
        (0, import_jsx_runtime174.jsx)(
          "div",
          {
            ...getStyles2("saturationOverlay", {
              style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` }
            })
          }
        ),
        (0, import_jsx_runtime174.jsx)(
          "div",
          {
            ...getStyles2("saturationOverlay", {
              style: { backgroundImage: "linear-gradient(90deg, #fff, transparent)" }
            })
          }
        ),
        (0, import_jsx_runtime174.jsx)(
          "div",
          {
            ...getStyles2("saturationOverlay", {
              style: { backgroundImage: "linear-gradient(0deg, #000, transparent)" }
            })
          }
        ),
        (0, import_jsx_runtime174.jsx)(Thumb2, { position, ...getStyles2("thumb", { style: { backgroundColor: color } }) })
      ]
    }
  );
}
Saturation.displayName = "@mantine/core/Saturation";

// node_modules/@mantine/core/esm/components/ColorPicker/Swatches/Swatches.mjs
var import_jsx_runtime175 = __toESM(require_jsx_runtime(), 1);
var import_react261 = __toESM(require_react(), 1);
var Swatches = (0, import_react261.forwardRef)(
  ({
    className,
    datatype,
    setValue,
    onChangeEnd,
    size: size4,
    focusable: focusable2,
    data,
    swatchesPerRow,
    ...others
  }, ref) => {
    const ctx = useColorPickerContext();
    const colors = data.map((color, index5) => (0, import_react261.createElement)(
      ColorSwatch,
      {
        ...ctx.getStyles("swatch"),
        unstyled: ctx.unstyled,
        component: "button",
        type: "button",
        color,
        key: index5,
        radius: "sm",
        onClick: () => {
          setValue(color);
          onChangeEnd == null ? void 0 : onChangeEnd(color);
        },
        "aria-label": color,
        tabIndex: focusable2 ? 0 : -1,
        "data-swatch": true
      }
    ));
    return (0, import_jsx_runtime175.jsx)(Box, { ...ctx.getStyles("swatches"), ref, ...others, children: colors });
  }
);
Swatches.displayName = "@mantine/core/Swatches";

// node_modules/@mantine/core/esm/components/ColorPicker/ColorPicker.mjs
var defaultProps78 = {
  swatchesPerRow: 7,
  withPicker: true,
  focusable: true,
  size: "md",
  __staticSelector: "ColorPicker"
};
var varsResolver40 = createVarsResolver((_, { size: size4, swatchesPerRow }) => ({
  wrapper: {
    "--cp-preview-size": getSize(size4, "cp-preview-size"),
    "--cp-width": getSize(size4, "cp-width"),
    "--cp-body-spacing": getSpacing(size4),
    "--cp-swatch-size": `${100 / swatchesPerRow}%`,
    "--cp-thumb-size": getSize(size4, "cp-thumb-size"),
    "--cp-saturation-height": getSize(size4, "cp-saturation-height")
  }
}));
var ColorPicker = factory((_props, ref) => {
  const props = useProps("ColorPicker", defaultProps78, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    format: format2,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    withPicker,
    size: size4,
    saturationLabel,
    hueLabel,
    alphaLabel,
    focusable: focusable2,
    swatches,
    swatchesPerRow,
    fullWidth,
    onColorSwatchClick,
    __staticSelector,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: __staticSelector,
    props,
    classes: classes39,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver40
  });
  const formatRef = (0, import_react262.useRef)(format2);
  const valueRef = (0, import_react262.useRef)();
  const scrubTimeoutRef = (0, import_react262.useRef)(-1);
  const isScrubbingRef = (0, import_react262.useRef)(false);
  const withAlpha = format2 === "hexa" || format2 === "rgba" || format2 === "hsla";
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "#FFFFFF",
    onChange
  });
  const [parsed, setParsed] = (0, import_react262.useState)(parseColor(_value));
  const startScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    isScrubbingRef.current = true;
  };
  const stopScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    scrubTimeoutRef.current = window.setTimeout(() => {
      isScrubbingRef.current = false;
    }, 200);
  };
  const handleChange = (color) => {
    setParsed((current) => {
      const next = { ...current, ...color };
      valueRef.current = convertHsvaTo(formatRef.current, next);
      return next;
    });
    setValue(valueRef.current);
  };
  useDidUpdate(() => {
    if (isColorValid(value) && !isScrubbingRef.current) {
      setParsed(parseColor(value));
    }
  }, [value]);
  useDidUpdate(() => {
    formatRef.current = format2;
    setValue(convertHsvaTo(format2, parsed));
  }, [format2]);
  return (0, import_jsx_runtime176.jsx)(ColorPickerProvider, { value: { getStyles: getStyles2, unstyled }, children: (0, import_jsx_runtime176.jsxs)(
    Box,
    {
      ref,
      ...getStyles2("wrapper"),
      size: size4,
      mod: [{ "full-width": fullWidth }, mod],
      ...others,
      children: [
        withPicker && (0, import_jsx_runtime176.jsxs)(import_jsx_runtime176.Fragment, { children: [
          (0, import_jsx_runtime176.jsx)(
            Saturation,
            {
              value: parsed,
              onChange: handleChange,
              onChangeEnd: ({ s, v }) => onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(formatRef.current, { ...parsed, s, v })),
              color: _value,
              size: size4,
              focusable: focusable2,
              saturationLabel,
              onScrubStart: startScrubbing,
              onScrubEnd: stopScrubbing
            }
          ),
          (0, import_jsx_runtime176.jsxs)("div", { ...getStyles2("body"), children: [
            (0, import_jsx_runtime176.jsxs)("div", { ...getStyles2("sliders"), children: [
              (0, import_jsx_runtime176.jsx)(
                HueSlider,
                {
                  value: parsed.h,
                  onChange: (h) => handleChange({ h }),
                  onChangeEnd: (h) => onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(formatRef.current, { ...parsed, h })),
                  size: size4,
                  focusable: focusable2,
                  "aria-label": hueLabel,
                  onScrubStart: startScrubbing,
                  onScrubEnd: stopScrubbing
                }
              ),
              withAlpha && (0, import_jsx_runtime176.jsx)(
                AlphaSlider,
                {
                  value: parsed.a,
                  onChange: (a) => handleChange({ a }),
                  onChangeEnd: (a) => {
                    onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(formatRef.current, { ...parsed, a }));
                  },
                  size: size4,
                  color: convertHsvaTo("hex", parsed),
                  focusable: focusable2,
                  "aria-label": alphaLabel,
                  onScrubStart: startScrubbing,
                  onScrubEnd: stopScrubbing
                }
              )
            ] }),
            withAlpha && (0, import_jsx_runtime176.jsx)(
              ColorSwatch,
              {
                color: _value,
                radius: "sm",
                size: "var(--cp-preview-size)",
                ...getStyles2("preview")
              }
            )
          ] })
        ] }),
        Array.isArray(swatches) && (0, import_jsx_runtime176.jsx)(
          Swatches,
          {
            data: swatches,
            swatchesPerRow,
            focusable: focusable2,
            setValue,
            onChangeEnd: (color) => {
              const convertedColor = convertHsvaTo(format2, parseColor(color));
              onColorSwatchClick == null ? void 0 : onColorSwatchClick(convertedColor);
              onChangeEnd == null ? void 0 : onChangeEnd(convertedColor);
              if (!controlled) {
                setParsed(parseColor(color));
              }
            }
          }
        )
      ]
    }
  ) });
});
ColorPicker.classes = classes39;
ColorPicker.displayName = "@mantine/core/ColorPicker";

// node_modules/@mantine/core/esm/components/ColorInput/ColorInput.mjs
var import_jsx_runtime178 = __toESM(require_jsx_runtime(), 1);
var import_react263 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ColorInput/EyeDropperIcon.mjs
var import_jsx_runtime177 = __toESM(require_jsx_runtime(), 1);
function EyeDropperIcon({ style, ...others }) {
  return (0, import_jsx_runtime177.jsxs)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: "var(--ci-eye-dropper-icon-size)",
        height: "var(--ci-eye-dropper-icon-size)",
        ...style
      },
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...others,
      children: [
        (0, import_jsx_runtime177.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        (0, import_jsx_runtime177.jsx)("path", { d: "M11 7l6 6" }),
        (0, import_jsx_runtime177.jsx)("path", { d: "M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z" })
      ]
    }
  );
}

// node_modules/@mantine/core/esm/components/ColorInput/ColorInput.module.css.mjs
var classes40 = { "eyeDropperIcon": "m_b077c2bc", "colorPreview": "m_c5ccdcab", "dropdown": "m_5ece2cd7" };

// node_modules/@mantine/core/esm/components/ColorInput/ColorInput.mjs
var defaultProps79 = {
  format: "hex",
  fixOnBlur: true,
  withPreview: true,
  swatchesPerRow: 7,
  withPicker: true,
  popoverProps: { transitionProps: { transition: "fade", duration: 0 } },
  withEyeDropper: true
};
var varsResolver41 = createVarsResolver((_, { size: size4 }) => ({
  eyeDropperIcon: {
    "--ci-eye-dropper-icon-size": getSize(size4, "ci-eye-dropper-icon-size")
  },
  colorPreview: {
    "--ci-preview-size": getSize(size4, "ci-preview-size")
  }
}));
var ColorInput = factory((_props, ref) => {
  const props = useProps("ColorInput", defaultProps79, _props);
  const {
    classNames,
    styles,
    unstyled,
    disallowInput,
    fixOnBlur,
    popoverProps,
    withPreview,
    withEyeDropper,
    eyeDropperIcon,
    closeOnColorSwatchClick,
    eyeDropperButtonProps,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    onClick,
    onFocus,
    onBlur,
    inputProps,
    format: format2,
    wrapperProps,
    readOnly,
    withPicker,
    swatches,
    disabled,
    leftSection,
    rightSection,
    swatchesPerRow,
    ...others
  } = useInputProps("ColorInput", defaultProps79, _props);
  const getStyles2 = useStyles({
    name: "ColorInput",
    props,
    classes: classes40,
    classNames,
    styles,
    unstyled,
    rootSelector: "wrapper",
    vars: props.vars,
    varsResolver: varsResolver41
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [dropdownOpened, setDropdownOpened] = (0, import_react263.useState)(false);
  const [lastValidValue, setLastValidValue] = (0, import_react263.useState)("");
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const { supported: eyeDropperSupported, open: openEyeDropper } = useEyeDropper();
  const eyeDropper = (0, import_jsx_runtime178.jsx)(
    ActionIcon,
    {
      ...eyeDropperButtonProps,
      ...getStyles2("eyeDropperButton", {
        className: eyeDropperButtonProps == null ? void 0 : eyeDropperButtonProps.className,
        style: eyeDropperButtonProps == null ? void 0 : eyeDropperButtonProps.style
      }),
      variant: "subtle",
      color: "gray",
      size: inputProps.size,
      unstyled,
      onClick: () => openEyeDropper().then((payload) => {
        if (payload == null ? void 0 : payload.sRGBHex) {
          const color = convertHsvaTo(format2, parseColor(payload.sRGBHex));
          setValue(color);
          onChangeEnd == null ? void 0 : onChangeEnd(color);
        }
      }).catch(() => {
      }),
      children: eyeDropperIcon || (0, import_jsx_runtime178.jsx)(EyeDropperIcon, { ...getStyles2("eyeDropperIcon") })
    }
  );
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputBlur = (event) => {
    fixOnBlur && setValue(lastValidValue);
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  (0, import_react263.useEffect)(() => {
    if (isColorValid(_value) || _value.trim() === "") {
      setLastValidValue(_value);
    }
  }, [_value]);
  useDidUpdate(() => {
    if (isColorValid(_value)) {
      setValue(convertHsvaTo(format2, parseColor(_value)));
    }
  }, [format2]);
  return (0, import_jsx_runtime178.jsx)(
    Input.Wrapper,
    {
      ...wrapperProps,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "ColorInput",
      children: (0, import_jsx_runtime178.jsxs)(
        Popover,
        {
          __staticSelector: "ColorInput",
          position: "bottom-start",
          offset: 5,
          ...popoverProps,
          opened: dropdownOpened,
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          withRoles: false,
          disabled: readOnly || withPicker === false && (!Array.isArray(swatches) || swatches.length === 0),
          children: [
            (0, import_jsx_runtime178.jsx)(Popover.Target, { children: (0, import_jsx_runtime178.jsx)(
              Input,
              {
                autoComplete: "off",
                ...others,
                ...inputProps,
                classNames: resolvedClassNames,
                styles: resolvedStyles,
                disabled,
                ref,
                __staticSelector: "ColorInput",
                onFocus: handleInputFocus,
                onBlur: handleInputBlur,
                onClick: handleInputClick,
                spellCheck: false,
                value: _value,
                onChange: (event) => {
                  const inputValue = event.currentTarget.value;
                  setValue(inputValue);
                  if (isColorValid(inputValue)) {
                    onChangeEnd == null ? void 0 : onChangeEnd(convertHsvaTo(format2, parseColor(inputValue)));
                  }
                },
                leftSection: leftSection || (withPreview ? (0, import_jsx_runtime178.jsx)(
                  ColorSwatch,
                  {
                    color: isColorValid(_value) ? _value : "#fff",
                    size: "var(--ci-preview-size)",
                    ...getStyles2("colorPreview")
                  }
                ) : null),
                readOnly: disallowInput || readOnly,
                pointer: disallowInput,
                unstyled,
                rightSection: rightSection || (withEyeDropper && !disabled && !readOnly && eyeDropperSupported ? eyeDropper : null)
              }
            ) }),
            (0, import_jsx_runtime178.jsx)(
              Popover.Dropdown,
              {
                onMouseDown: (event) => event.preventDefault(),
                className: classes40.dropdown,
                children: (0, import_jsx_runtime178.jsx)(
                  ColorPicker,
                  {
                    __staticSelector: "ColorInput",
                    value: _value,
                    onChange: setValue,
                    onChangeEnd,
                    format: format2,
                    swatches,
                    swatchesPerRow,
                    withPicker,
                    size: inputProps.size,
                    focusable: false,
                    unstyled,
                    styles: resolvedStyles,
                    classNames: resolvedClassNames,
                    onColorSwatchClick: () => closeOnColorSwatchClick && setDropdownOpened(false)
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
});
ColorInput.classes = InputBase.classes;
ColorInput.displayName = "@mantine/core/ColorInput";

// node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-virtualized-combobox.mjs
var import_react264 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Combobox/use-combobox/get-index/get-virtualized-index.mjs
function getPreviousIndex3({
  currentIndex,
  isOptionDisabled,
  totalOptionsCount,
  loop
}) {
  for (let i = currentIndex - 1; i >= 0; i -= 1) {
    if (!isOptionDisabled(i)) {
      return i;
    }
  }
  if (loop) {
    for (let i = totalOptionsCount - 1; i > -1; i -= 1) {
      if (!isOptionDisabled(i)) {
        return i;
      }
    }
  }
  return currentIndex;
}
function getNextIndex3({
  currentIndex,
  isOptionDisabled,
  totalOptionsCount,
  loop
}) {
  for (let i = currentIndex + 1; i < totalOptionsCount; i += 1) {
    if (!isOptionDisabled(i)) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < totalOptionsCount; i += 1) {
      if (!isOptionDisabled(i)) {
        return i;
      }
    }
  }
  return currentIndex;
}
function getFirstIndex2({ totalOptionsCount, isOptionDisabled }) {
  for (let i = 0; i < totalOptionsCount; i += 1) {
    if (!isOptionDisabled(i)) {
      return i;
    }
  }
  return -1;
}

// node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-virtualized-combobox.mjs
function useVirtualizedCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
  totalOptionsCount,
  isOptionDisabled = () => false,
  getOptionId,
  selectedOptionIndex,
  setSelectedOptionIndex,
  activeOptionIndex,
  onSelectedOptionSubmit
} = {
  totalOptionsCount: 0,
  getOptionId: () => null,
  selectedOptionIndex: 1,
  setSelectedOptionIndex: () => {
  },
  onSelectedOptionSubmit: () => {
  }
}) {
  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange
  });
  const listId = (0, import_react264.useRef)(null);
  const searchRef = (0, import_react264.useRef)(null);
  const targetRef = (0, import_react264.useRef)(null);
  const focusSearchTimeout = (0, import_react264.useRef)(-1);
  const focusTargetTimeout = (0, import_react264.useRef)(-1);
  const openDropdown = () => {
    if (!dropdownOpened) {
      setDropdownOpened(true);
      onDropdownOpen == null ? void 0 : onDropdownOpen();
    }
  };
  const closeDropdown = () => {
    if (dropdownOpened) {
      setDropdownOpened(false);
      onDropdownClose == null ? void 0 : onDropdownClose();
    }
  };
  const toggleDropdown = () => {
    if (dropdownOpened) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };
  const selectOption = (index5) => {
    const nextIndex = index5 >= totalOptionsCount ? 0 : index5 < 0 ? totalOptionsCount - 1 : index5;
    setSelectedOptionIndex(nextIndex);
    return getOptionId(nextIndex);
  };
  const selectActiveOption = () => selectOption(activeOptionIndex ?? 0);
  const selectNextOption = () => selectOption(
    getNextIndex3({ currentIndex: selectedOptionIndex, isOptionDisabled, totalOptionsCount, loop })
  );
  const selectPreviousOption = () => selectOption(
    getPreviousIndex3({
      currentIndex: selectedOptionIndex,
      isOptionDisabled,
      totalOptionsCount,
      loop
    })
  );
  const selectFirstOption = () => selectOption(getFirstIndex2({ isOptionDisabled, totalOptionsCount }));
  const resetSelectedOption = () => {
    setSelectedOptionIndex(-1);
  };
  const clickSelectedOption = () => {
    onSelectedOptionSubmit == null ? void 0 : onSelectedOptionSubmit(selectedOptionIndex);
  };
  const setListId = (id) => {
    listId.current = id;
  };
  const focusSearchInput = () => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current.focus(), 0);
  };
  const focusTarget = () => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current.focus(), 0);
  };
  (0, import_react264.useEffect)(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
    },
    []
  );
  const getSelectedOptionIndex = (0, import_react264.useCallback)(() => selectedOptionIndex, []);
  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectedOptionIndex,
    getSelectedOptionIndex,
    selectOption,
    selectFirstOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,
    updateSelectedOptionIndex: () => {
    },
    listId: listId.current,
    setListId,
    clickSelectedOption,
    searchRef,
    focusSearchInput,
    targetRef,
    focusTarget
  };
}

// node_modules/@mantine/core/esm/components/Container/Container.mjs
var import_jsx_runtime179 = __toESM(require_jsx_runtime(), 1);
var import_react265 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs
var classes41 = { "root": "m_7485cace" };

// node_modules/@mantine/core/esm/components/Container/Container.mjs
var defaultProps80 = {};
var varsResolver42 = createVarsResolver((_, { size: size4, fluid }) => ({
  root: {
    "--container-size": fluid ? void 0 : getSize(size4, "container-size")
  }
}));
var Container = factory((_props, ref) => {
  const props = useProps("Container", defaultProps80, _props);
  const { classNames, className, style, styles, unstyled, vars, fluid, mod, ...others } = props;
  const getStyles2 = useStyles({
    name: "Container",
    classes: classes41,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver42
  });
  return (0, import_jsx_runtime179.jsx)(Box, { ref, mod: [{ fluid }, mod], ...getStyles2("root"), ...others });
});
Container.classes = classes41;
Container.displayName = "@mantine/core/Container";

// node_modules/@mantine/core/esm/components/CopyButton/CopyButton.mjs
var import_jsx_runtime180 = __toESM(require_jsx_runtime(), 1);
var import_react266 = __toESM(require_react(), 1);
var defaultProps81 = {
  timeout: 1e3
};
function CopyButton(props) {
  const { children, timeout, value, ...others } = useProps("CopyButton", defaultProps81, props);
  const clipboard = useClipboard({ timeout });
  const copy = () => clipboard.copy(value);
  return (0, import_jsx_runtime180.jsx)(import_jsx_runtime180.Fragment, { children: children({ copy, copied: clipboard.copied, ...others }) });
}
CopyButton.displayName = "@mantine/core/CopyButton";

// node_modules/@mantine/core/esm/components/Dialog/Dialog.mjs
var import_jsx_runtime181 = __toESM(require_jsx_runtime(), 1);
var import_react267 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Dialog/Dialog.module.css.mjs
var classes42 = { "root": "m_e2125a27", "closeButton": "m_5abab665" };

// node_modules/@mantine/core/esm/components/Dialog/Dialog.mjs
var defaultProps82 = {
  shadow: "md",
  p: "md",
  withBorder: false,
  transitionProps: { transition: "pop-top-right", duration: 200 },
  position: {
    bottom: 30,
    right: 30
  }
};
var varsResolver43 = createVarsResolver((_, { size: size4 }) => ({
  root: {
    "--dialog-size": getSize(size4, "dialog-size")
  }
}));
var Dialog = factory((_props, ref) => {
  const props = useProps("Dialog", defaultProps82, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    zIndex,
    position,
    keepMounted,
    opened,
    transitionProps,
    withCloseButton,
    withinPortal,
    children,
    onClose,
    portalProps,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Dialog",
    classes: classes42,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver43
  });
  return (0, import_jsx_runtime181.jsx)(
    Affix,
    {
      zIndex,
      position,
      ref,
      withinPortal,
      portalProps,
      unstyled,
      children: (0, import_jsx_runtime181.jsx)(Transition, { keepMounted, mounted: opened, ...transitionProps, children: (transitionStyles) => (0, import_jsx_runtime181.jsxs)(
        Paper,
        {
          unstyled,
          ...getStyles2("root", { style: transitionStyles }),
          ...others,
          children: [
            withCloseButton && (0, import_jsx_runtime181.jsx)(CloseButton, { onClick: onClose, unstyled, ...getStyles2("closeButton") }),
            children
          ]
        }
      ) })
    }
  );
});
Dialog.classes = classes42;
Dialog.displayName = "@mantine/core/Dialog";

// node_modules/@mantine/core/esm/components/Divider/Divider.mjs
var import_jsx_runtime182 = __toESM(require_jsx_runtime(), 1);
var import_react268 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Divider/Divider.module.css.mjs
var classes43 = { "root": "m_3eebeb36", "label": "m_9e365f20" };

// node_modules/@mantine/core/esm/components/Divider/Divider.mjs
var defaultProps83 = {
  orientation: "horizontal"
};
var varsResolver44 = createVarsResolver((theme, { color, variant, size: size4 }) => ({
  root: {
    "--divider-color": color ? getThemeColor(color, theme) : void 0,
    "--divider-border-style": variant,
    "--divider-size": getSize(size4, "divider-size")
  }
}));
var Divider = factory((_props, ref) => {
  const props = useProps("Divider", defaultProps83, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    orientation,
    label,
    labelPosition,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Divider",
    classes: classes43,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver44
  });
  return (0, import_jsx_runtime182.jsx)(
    Box,
    {
      ref,
      mod: [{ orientation, "with-label": !!label }, mod],
      ...getStyles2("root"),
      ...others,
      role: "separator",
      children: label && (0, import_jsx_runtime182.jsx)(Box, { component: "span", mod: { position: labelPosition }, ...getStyles2("label"), children: label })
    }
  );
});
Divider.classes = classes43;
Divider.displayName = "@mantine/core/Divider";

// node_modules/@mantine/core/esm/components/Drawer/Drawer.mjs
var import_jsx_runtime191 = __toESM(require_jsx_runtime(), 1);
var import_react277 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Drawer/DrawerBody.mjs
var import_jsx_runtime184 = __toESM(require_jsx_runtime(), 1);
var import_react270 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Drawer/Drawer.context.mjs
var import_react269 = __toESM(require_react(), 1);
var import_jsx_runtime183 = __toESM(require_jsx_runtime(), 1);
var [DrawerProvider, useDrawerContext] = createSafeContext(
  "Drawer component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Drawer/Drawer.module.css.mjs
var classes44 = { "root": "m_f11b401e", "header": "m_5a7c2c9", "content": "m_b8a05bbd", "inner": "m_31cd769a" };

// node_modules/@mantine/core/esm/components/Drawer/DrawerBody.mjs
var defaultProps84 = {};
var DrawerBody = factory((_props, ref) => {
  const props = useProps("DrawerBody", defaultProps84, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useDrawerContext();
  return (0, import_jsx_runtime184.jsx)(
    ModalBaseBody,
    {
      ref,
      ...ctx.getStyles("body", { classNames, style, styles, className }),
      ...others
    }
  );
});
DrawerBody.classes = classes44;
DrawerBody.displayName = "@mantine/core/DrawerBody";

// node_modules/@mantine/core/esm/components/Drawer/DrawerCloseButton.mjs
var import_jsx_runtime185 = __toESM(require_jsx_runtime(), 1);
var import_react271 = __toESM(require_react(), 1);
var defaultProps85 = {};
var DrawerCloseButton = factory((_props, ref) => {
  const props = useProps("DrawerCloseButton", defaultProps85, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useDrawerContext();
  return (0, import_jsx_runtime185.jsx)(
    ModalBaseCloseButton,
    {
      ref,
      ...ctx.getStyles("close", { classNames, style, styles, className }),
      ...others
    }
  );
});
DrawerCloseButton.classes = classes44;
DrawerCloseButton.displayName = "@mantine/core/DrawerCloseButton";

// node_modules/@mantine/core/esm/components/Drawer/DrawerContent.mjs
var import_jsx_runtime186 = __toESM(require_jsx_runtime(), 1);
var import_react272 = __toESM(require_react(), 1);
var defaultProps86 = {};
var DrawerContent = factory((_props, ref) => {
  const props = useProps("DrawerContent", defaultProps86, _props);
  const { classNames, className, style, styles, vars, children, radius, ...others } = props;
  const ctx = useDrawerContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return (0, import_jsx_runtime186.jsx)(
    ModalBaseContent,
    {
      ...ctx.getStyles("content", { className, style, styles, classNames }),
      innerProps: ctx.getStyles("inner", { className, style, styles, classNames }),
      ref,
      ...others,
      radius: radius || ctx.radius || 0,
      children: (0, import_jsx_runtime186.jsx)(Scroll, { style: { height: "100vh" }, children })
    }
  );
});
DrawerContent.classes = classes44;
DrawerContent.displayName = "@mantine/core/DrawerContent";

// node_modules/@mantine/core/esm/components/Drawer/DrawerHeader.mjs
var import_jsx_runtime187 = __toESM(require_jsx_runtime(), 1);
var import_react273 = __toESM(require_react(), 1);
var defaultProps87 = {};
var DrawerHeader = factory((_props, ref) => {
  const props = useProps("DrawerHeader", defaultProps87, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useDrawerContext();
  return (0, import_jsx_runtime187.jsx)(
    ModalBaseHeader,
    {
      ref,
      ...ctx.getStyles("header", { classNames, style, styles, className }),
      ...others
    }
  );
});
DrawerHeader.classes = classes44;
DrawerHeader.displayName = "@mantine/core/DrawerHeader";

// node_modules/@mantine/core/esm/components/Drawer/DrawerOverlay.mjs
var import_jsx_runtime188 = __toESM(require_jsx_runtime(), 1);
var import_react274 = __toESM(require_react(), 1);
var defaultProps88 = {};
var DrawerOverlay = factory((_props, ref) => {
  const props = useProps("DrawerOverlay", defaultProps88, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useDrawerContext();
  return (0, import_jsx_runtime188.jsx)(
    ModalBaseOverlay,
    {
      ref,
      ...ctx.getStyles("overlay", { classNames, style, styles, className }),
      ...others
    }
  );
});
DrawerOverlay.classes = classes44;
DrawerOverlay.displayName = "@mantine/core/DrawerOverlay";

// node_modules/@mantine/core/esm/components/Drawer/DrawerRoot.mjs
var import_jsx_runtime189 = __toESM(require_jsx_runtime(), 1);
var import_react275 = __toESM(require_react(), 1);
function getDrawerAlign(position) {
  switch (position) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return void 0;
  }
}
function getDrawerFlex(position) {
  if (position === "top" || position === "bottom") {
    return "0 0 calc(100% - var(--drawer-offset, 0rem) * 2)";
  }
  return void 0;
}
var transitions2 = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left"
};
var rtlTransitions = {
  top: "slide-down",
  bottom: "slide-up",
  right: "slide-right",
  left: "slide-left"
};
var defaultProps89 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  position: "left"
};
var varsResolver45 = createVarsResolver((_, { position, size: size4, offset: offset4 }) => ({
  root: {
    "--drawer-size": getSize(size4, "drawer-size"),
    "--drawer-flex": getDrawerFlex(position),
    "--drawer-height": position === "left" || position === "right" ? void 0 : "var(--drawer-size)",
    "--drawer-align": getDrawerAlign(position),
    "--drawer-justify": position === "right" ? "flex-end" : void 0,
    "--drawer-offset": rem(offset4)
  }
}));
var DrawerRoot = factory((_props, ref) => {
  const props = useProps("DrawerRoot", defaultProps89, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    scrollAreaComponent,
    position,
    transitionProps,
    radius,
    ...others
  } = props;
  const { dir } = useDirection();
  const getStyles2 = useStyles({
    name: "Drawer",
    classes: classes44,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver45
  });
  const drawerTransition = (dir === "rtl" ? rtlTransitions : transitions2)[position];
  return (0, import_jsx_runtime189.jsx)(DrawerProvider, { value: { scrollAreaComponent, getStyles: getStyles2, radius }, children: (0, import_jsx_runtime189.jsx)(
    ModalBase,
    {
      ref,
      ...getStyles2("root"),
      transitionProps: { transition: drawerTransition, ...transitionProps },
      unstyled,
      ...others
    }
  ) });
});
DrawerRoot.classes = classes44;
DrawerRoot.displayName = "@mantine/core/DrawerRoot";

// node_modules/@mantine/core/esm/components/Drawer/DrawerTitle.mjs
var import_jsx_runtime190 = __toESM(require_jsx_runtime(), 1);
var import_react276 = __toESM(require_react(), 1);
var defaultProps90 = {};
var DrawerTitle = factory((_props, ref) => {
  const props = useProps("DrawerTitle", defaultProps90, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useDrawerContext();
  return (0, import_jsx_runtime190.jsx)(
    ModalBaseTitle,
    {
      ref,
      ...ctx.getStyles("title", { classNames, style, styles, className }),
      ...others
    }
  );
});
DrawerTitle.classes = classes44;
DrawerTitle.displayName = "@mantine/core/DrawerTitle";

// node_modules/@mantine/core/esm/components/Drawer/Drawer.mjs
var defaultProps91 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  withOverlay: true,
  withCloseButton: true
};
var Drawer = factory((_props, ref) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    ...others
  } = useProps("Drawer", defaultProps91, _props);
  const hasHeader = !!title || withCloseButton;
  return (0, import_jsx_runtime191.jsxs)(DrawerRoot, { ref, ...others, children: [
    withOverlay && (0, import_jsx_runtime191.jsx)(DrawerOverlay, { ...overlayProps }),
    (0, import_jsx_runtime191.jsxs)(DrawerContent, { children: [
      hasHeader && (0, import_jsx_runtime191.jsxs)(DrawerHeader, { children: [
        title && (0, import_jsx_runtime191.jsx)(DrawerTitle, { children: title }),
        withCloseButton && (0, import_jsx_runtime191.jsx)(DrawerCloseButton, { ...closeButtonProps })
      ] }),
      (0, import_jsx_runtime191.jsx)(DrawerBody, { children })
    ] })
  ] });
});
Drawer.classes = classes44;
Drawer.displayName = "@mantine/core/Drawer";
Drawer.Root = DrawerRoot;
Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.Body = DrawerBody;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.CloseButton = DrawerCloseButton;

// node_modules/@mantine/core/esm/components/Fieldset/Fieldset.mjs
var import_jsx_runtime192 = __toESM(require_jsx_runtime(), 1);
var import_react278 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Fieldset/Fieldset.module.css.mjs
var classes45 = { "root": "m_e9408a47", "root--default": "m_84c9523a", "root--filled": "m_ef274e49", "root--unstyled": "m_eda993d3", "legend": "m_90794832", "legend--unstyled": "m_74ca27fe" };

// node_modules/@mantine/core/esm/components/Fieldset/Fieldset.mjs
var defaultProps92 = {
  variant: "default"
};
var varsResolver46 = createVarsResolver((_, { radius }) => ({
  root: {
    "--fieldset-radius": radius === void 0 ? void 0 : getRadius(radius)
  }
}));
var Fieldset = factory((_props, ref) => {
  const props = useProps("Fieldset", defaultProps92, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    legend,
    variant,
    children,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Fieldset",
    classes: classes45,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver46
  });
  return (0, import_jsx_runtime192.jsxs)(
    Box,
    {
      component: "fieldset",
      ref,
      variant,
      ...getStyles2("root", { variant }),
      ...others,
      children: [
        legend && (0, import_jsx_runtime192.jsx)("legend", { ...getStyles2("legend", { variant }), children: legend }),
        children
      ]
    }
  );
});
Fieldset.classes = classes45;
Fieldset.displayName = "@mantine/core/Fieldset";

// node_modules/@mantine/core/esm/components/FileButton/FileButton.mjs
var import_jsx_runtime193 = __toESM(require_jsx_runtime(), 1);
var import_react279 = __toESM(require_react(), 1);
var defaultProps93 = {
  multiple: false
};
var FileButton = (0, import_react279.forwardRef)(
  (props, ref) => {
    const {
      onChange,
      children,
      multiple,
      accept,
      name,
      form,
      resetRef,
      disabled,
      capture,
      inputProps,
      ...others
    } = useProps("FileButton", defaultProps93, props);
    const inputRef = (0, import_react279.useRef)();
    const onClick = () => {
      var _a;
      !disabled && ((_a = inputRef.current) == null ? void 0 : _a.click());
    };
    const handleChange = (event) => {
      if (multiple) {
        onChange(Array.from(event.currentTarget.files));
      } else {
        onChange(event.currentTarget.files[0] || null);
      }
    };
    const reset = () => {
      inputRef.current.value = "";
    };
    assignRef2(resetRef, reset);
    return (0, import_jsx_runtime193.jsxs)(import_jsx_runtime193.Fragment, { children: [
      children({ onClick, ...others }),
      (0, import_jsx_runtime193.jsx)(
        "input",
        {
          style: { display: "none" },
          type: "file",
          accept,
          multiple,
          onChange: handleChange,
          ref: useMergedRef(ref, inputRef),
          name,
          form,
          capture,
          ...inputProps
        }
      )
    ] });
  }
);
FileButton.displayName = "@mantine/core/FileButton";

// node_modules/@mantine/core/esm/components/FileInput/FileInput.mjs
var import_jsx_runtime194 = __toESM(require_jsx_runtime(), 1);
var import_react280 = __toESM(require_react(), 1);
var DefaultValue = ({ value }) => (0, import_jsx_runtime194.jsx)("div", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: Array.isArray(value) ? value.map((file) => file.name).join(", ") : value == null ? void 0 : value.name });
var defaultProps94 = {
  valueComponent: DefaultValue
};
var _FileInput = factory((_props, ref) => {
  const props = useProps("FileInput", defaultProps94, _props);
  const {
    unstyled,
    vars,
    onChange,
    value,
    defaultValue,
    multiple,
    accept,
    name,
    form,
    valueComponent,
    clearable,
    clearButtonProps,
    readOnly,
    capture,
    fileInputProps,
    rightSection,
    size: size4,
    placeholder,
    ...others
  } = props;
  const resetRef = (0, import_react280.useRef)(null);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    onChange,
    finalValue: multiple ? [] : null
  });
  const hasValue = Array.isArray(_value) ? _value.length !== 0 : _value !== null;
  const _rightSection = rightSection || (clearable && hasValue && !readOnly ? (0, import_jsx_runtime194.jsx)(
    CloseButton,
    {
      ...clearButtonProps,
      variant: "subtle",
      onClick: () => setValue(multiple ? [] : null),
      size: size4,
      unstyled
    }
  ) : null);
  (0, import_react280.useEffect)(() => {
    var _a;
    if (Array.isArray(_value) && _value.length === 0 || _value === null) {
      (_a = resetRef.current) == null ? void 0 : _a.call(resetRef);
    }
  }, [_value]);
  const ValueComponent = valueComponent;
  return (0, import_jsx_runtime194.jsx)(
    FileButton,
    {
      onChange: setValue,
      multiple,
      accept,
      name,
      form,
      resetRef,
      disabled: readOnly,
      capture,
      inputProps: fileInputProps,
      children: (fileButtonProps) => (0, import_jsx_runtime194.jsx)(
        InputBase,
        {
          component: "button",
          ref,
          rightSection: _rightSection,
          ...fileButtonProps,
          ...others,
          __staticSelector: "FileInput",
          multiline: true,
          type: "button",
          pointer: true,
          __stylesApiProps: props,
          unstyled,
          size: size4,
          children: !hasValue ? (0, import_jsx_runtime194.jsx)(Input.Placeholder, { children: placeholder }) : (0, import_jsx_runtime194.jsx)(ValueComponent, { value: _value })
        }
      )
    }
  );
});
_FileInput.classes = InputBase.classes;
_FileInput.displayName = "@mantine/core/FileInput";
var FileInput = _FileInput;

// node_modules/@mantine/core/esm/components/Floating/use-delayed-hover.mjs
var import_react281 = __toESM(require_react(), 1);
function useDelayedHover({ open, close, openDelay, closeDelay }) {
  const openTimeout = (0, import_react281.useRef)(-1);
  const closeTimeout = (0, import_react281.useRef)(-1);
  const clearTimeouts = () => {
    window.clearTimeout(openTimeout.current);
    window.clearTimeout(closeTimeout.current);
  };
  const openDropdown = () => {
    clearTimeouts();
    if (openDelay === 0 || openDelay === void 0) {
      open();
    } else {
      openTimeout.current = window.setTimeout(open, openDelay);
    }
  };
  const closeDropdown = () => {
    clearTimeouts();
    if (closeDelay === 0 || closeDelay === void 0) {
      close();
    } else {
      closeTimeout.current = window.setTimeout(close, closeDelay);
    }
  };
  (0, import_react281.useEffect)(() => clearTimeouts, []);
  return { openDropdown, closeDropdown };
}

// node_modules/@mantine/core/esm/components/Grid/Grid.mjs
var import_jsx_runtime199 = __toESM(require_jsx_runtime(), 1);
var import_react286 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Grid/Grid.context.mjs
var import_react282 = __toESM(require_react(), 1);
var import_jsx_runtime195 = __toESM(require_jsx_runtime(), 1);
var [GridProvider, useGridContext] = createSafeContext(
  "Grid component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Grid/GridCol/GridCol.mjs
var import_jsx_runtime197 = __toESM(require_jsx_runtime(), 1);
var import_react284 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Grid/GridCol/GridColVariables.mjs
var import_jsx_runtime196 = __toESM(require_jsx_runtime(), 1);
var import_react283 = __toESM(require_react(), 1);
var getColumnFlexBasis = (colSpan, columns) => {
  if (colSpan === "content") {
    return "auto";
  }
  if (colSpan === "auto") {
    return "0rem";
  }
  return colSpan ? `${100 / (columns / colSpan)}%` : void 0;
};
var getColumnMaxWidth = (colSpan, columns, grow) => {
  if (grow || colSpan === "auto") {
    return "100%";
  }
  if (colSpan === "content") {
    return "unset";
  }
  return getColumnFlexBasis(colSpan, columns);
};
var getColumnFlexGrow = (colSpan, grow) => {
  if (!colSpan) {
    return void 0;
  }
  return colSpan === "auto" || grow ? "1" : "auto";
};
var getColumnOffset = (offset4, columns) => offset4 === 0 ? "0" : offset4 ? `${100 / (columns / offset4)}%` : void 0;
function GridColVariables({ span, order, offset: offset4, selector }) {
  var _a;
  const theme = useMantineTheme();
  const ctx = useGridContext();
  const baseValue = getBaseValue(span);
  const baseSpan = baseValue === void 0 ? 12 : getBaseValue(span);
  const baseStyles = filterProps({
    "--col-order": (_a = getBaseValue(order)) == null ? void 0 : _a.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : void 0,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset(getBaseValue(offset4), ctx.columns)
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      var _a2;
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof order === "object" && order[breakpoint] !== void 0) {
        acc[breakpoint]["--col-order"] = (_a2 = order[breakpoint]) == null ? void 0 : _a2.toString();
      }
      if (typeof span === "object" && span[breakpoint] !== void 0) {
        acc[breakpoint]["--col-flex-grow"] = getColumnFlexGrow(span[breakpoint], ctx.grow);
        acc[breakpoint]["--col-flex-basis"] = getColumnFlexBasis(span[breakpoint], ctx.columns);
        acc[breakpoint]["--col-width"] = span[breakpoint] === "content" ? "auto" : void 0;
        acc[breakpoint]["--col-max-width"] = getColumnMaxWidth(
          span[breakpoint],
          ctx.columns,
          ctx.grow
        );
      }
      if (typeof offset4 === "object" && offset4[breakpoint] !== void 0) {
        acc[breakpoint]["--col-offset"] = getColumnOffset(offset4[breakpoint], ctx.columns);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return (0, import_jsx_runtime196.jsx)(InlineStyles, { styles: baseStyles, media, selector });
}

// node_modules/@mantine/core/esm/components/Grid/Grid.module.css.mjs
var classes46 = { "root": "m_410352e9", "inner": "m_dee7bd2f", "col": "m_96bdd299" };

// node_modules/@mantine/core/esm/components/Grid/GridCol/GridCol.mjs
var defaultProps95 = {
  span: 12
};
var GridCol = factory((_props, ref) => {
  const props = useProps("GridCol", defaultProps95, _props);
  const { classNames, className, style, styles, vars, span, order, offset: offset4, ...others } = props;
  const ctx = useGridContext();
  const responsiveClassName = useRandomClassName();
  return (0, import_jsx_runtime197.jsxs)(import_jsx_runtime197.Fragment, { children: [
    (0, import_jsx_runtime197.jsx)(
      GridColVariables,
      {
        selector: `.${responsiveClassName}`,
        span,
        order,
        offset: offset4
      }
    ),
    (0, import_jsx_runtime197.jsx)(
      Box,
      {
        ref,
        ...ctx.getStyles("col", {
          className: clsx_default(className, responsiveClassName),
          style,
          classNames,
          styles
        }),
        ...others
      }
    )
  ] });
});
GridCol.classes = classes46;
GridCol.displayName = "@mantine/core/GridCol";

// node_modules/@mantine/core/esm/components/Grid/GridVariables.mjs
var import_jsx_runtime198 = __toESM(require_jsx_runtime(), 1);
var import_react285 = __toESM(require_react(), 1);
function GridVariables({ gutter, selector }) {
  const theme = useMantineTheme();
  const baseStyles = filterProps({
    "--grid-gutter": getSpacing(getBaseValue(gutter))
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof gutter === "object" && gutter[breakpoint] !== void 0) {
        acc[breakpoint]["--grid-gutter"] = getSpacing(gutter[breakpoint]);
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return (0, import_jsx_runtime198.jsx)(InlineStyles, { styles: baseStyles, media, selector });
}

// node_modules/@mantine/core/esm/components/Grid/Grid.mjs
var defaultProps96 = {
  gutter: "md",
  grow: false,
  columns: 12
};
var varsResolver47 = createVarsResolver((_, { justify, align, overflow }) => ({
  root: {
    "--grid-justify": justify,
    "--grid-align": align,
    "--grid-overflow": overflow
  }
}));
var Grid = factory((_props, ref) => {
  const props = useProps("Grid", defaultProps96, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Grid",
    classes: classes46,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver47
  });
  const responsiveClassName = useRandomClassName();
  return (0, import_jsx_runtime199.jsxs)(GridProvider, { value: { getStyles: getStyles2, grow, columns }, children: [
    (0, import_jsx_runtime199.jsx)(GridVariables, { selector: `.${responsiveClassName}`, ...props }),
    (0, import_jsx_runtime199.jsx)(Box, { ref, ...getStyles2("root", { className: responsiveClassName }), ...others, children: (0, import_jsx_runtime199.jsx)("div", { ...getStyles2("inner"), children }) })
  ] });
});
Grid.classes = classes46;
Grid.displayName = "@mantine/core/Grid";
Grid.Col = GridCol;

// node_modules/@mantine/core/esm/components/Highlight/Highlight.mjs
var import_jsx_runtime202 = __toESM(require_jsx_runtime(), 1);
var import_react289 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Mark/Mark.mjs
var import_jsx_runtime201 = __toESM(require_jsx_runtime(), 1);
var import_react288 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Mark/get-mark-color.mjs
var import_react287 = __toESM(require_react(), 1);
var import_jsx_runtime200 = __toESM(require_jsx_runtime(), 1);
function getMarkColor({ color, theme, defaultShade }) {
  const parsed = parseThemeColor({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--mantine-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

// node_modules/@mantine/core/esm/components/Mark/Mark.module.css.mjs
var classes47 = { "root": "m_bcb3f3c2" };

// node_modules/@mantine/core/esm/components/Mark/Mark.mjs
var defaultProps97 = {
  color: "yellow"
};
var varsResolver48 = createVarsResolver((theme, { color }) => ({
  root: {
    "--mark-bg-dark": getMarkColor({ color, theme, defaultShade: 5 }),
    "--mark-bg-light": getMarkColor({ color, theme, defaultShade: 2 })
  }
}));
var Mark = factory((_props, ref) => {
  const props = useProps("Mark", defaultProps97, _props);
  const { classNames, className, style, styles, unstyled, vars, color, variant, ...others } = props;
  const getStyles2 = useStyles({
    name: "Mark",
    props,
    className,
    style,
    classes: classes47,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver48
  });
  return (0, import_jsx_runtime201.jsx)(Box, { component: "mark", ref, variant, ...getStyles2("root"), ...others });
});
Mark.classes = classes47;
Mark.displayName = "@mantine/core/Mark";

// node_modules/@mantine/core/esm/components/Highlight/highlighter/highlighter.mjs
function escapeRegex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
}
function highlighter(value, _highlight) {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }
  const highlight = Array.isArray(_highlight) ? _highlight.map(escapeRegex) : escapeRegex(_highlight);
  const shouldHighlight = Array.isArray(highlight) ? highlight.filter((part) => part.trim().length > 0).length > 0 : highlight.trim() !== "";
  if (!shouldHighlight) {
    return [{ chunk: value, highlighted: false }];
  }
  const matcher = typeof highlight === "string" ? highlight.trim() : highlight.filter((part) => part.trim().length !== 0).map((part) => part.trim()).sort((a, b) => b.length - a.length).join("|");
  const re = new RegExp(`(${matcher})`, "gi");
  const chunks = value.split(re).map((part) => ({ chunk: part, highlighted: re.test(part) })).filter(({ chunk }) => chunk);
  return chunks;
}

// node_modules/@mantine/core/esm/components/Highlight/Highlight.mjs
var defaultProps98 = {};
var Highlight = polymorphicFactory((props, ref) => {
  const { unstyled, children, highlight, highlightStyles, color, ...others } = useProps(
    "Highlight",
    defaultProps98,
    props
  );
  const highlightChunks = highlighter(children, highlight);
  return (0, import_jsx_runtime202.jsx)(Text, { unstyled, ref, ...others, __staticSelector: "Highlight", children: highlightChunks.map(
    ({ chunk, highlighted }, i) => highlighted ? (0, import_jsx_runtime202.jsx)(
      Mark,
      {
        unstyled,
        color,
        style: highlightStyles,
        "data-highlight": chunk,
        children: chunk
      },
      i
    ) : (0, import_jsx_runtime202.jsx)("span", { children: chunk }, i)
  ) });
});
Highlight.classes = Text.classes;
Highlight.displayName = "@mantine/core/Highlight";

// node_modules/@mantine/core/esm/components/HoverCard/HoverCard.mjs
var import_jsx_runtime206 = __toESM(require_jsx_runtime(), 1);
var import_react293 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/HoverCard/HoverCard.context.mjs
var import_react290 = __toESM(require_react(), 1);
var import_jsx_runtime203 = __toESM(require_jsx_runtime(), 1);
var [HoverCardContextProvider, useHoverCardContext] = createSafeContext(
  "HoverCard component was not found in the tree"
);

// node_modules/@mantine/core/esm/components/HoverCard/HoverCardDropdown/HoverCardDropdown.mjs
var import_jsx_runtime204 = __toESM(require_jsx_runtime(), 1);
var import_react291 = __toESM(require_react(), 1);
var defaultProps99 = {};
function HoverCardDropdown(props) {
  const { children, onMouseEnter, onMouseLeave, ...others } = useProps(
    "HoverCardDropdown",
    defaultProps99,
    props
  );
  const ctx = useHoverCardContext();
  const handleMouseEnter = createEventHandler(onMouseEnter, ctx.openDropdown);
  const handleMouseLeave = createEventHandler(onMouseLeave, ctx.closeDropdown);
  return (0, import_jsx_runtime204.jsx)(Popover.Dropdown, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ...others, children });
}
HoverCardDropdown.displayName = "@mantine/core/HoverCardDropdown";

// node_modules/@mantine/core/esm/components/HoverCard/HoverCardTarget/HoverCardTarget.mjs
var import_jsx_runtime205 = __toESM(require_jsx_runtime(), 1);
var import_react292 = __toESM(require_react(), 1);
var defaultProps100 = {
  refProp: "ref"
};
var HoverCardTarget = (0, import_react292.forwardRef)((props, ref) => {
  const { children, refProp, eventPropsWrapperName, ...others } = useProps(
    "HoverCardTarget",
    defaultProps100,
    props
  );
  if (!isElement(children)) {
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useHoverCardContext();
  const onMouseEnter = createEventHandler(children.props.onMouseEnter, ctx.openDropdown);
  const onMouseLeave = createEventHandler(children.props.onMouseLeave, ctx.closeDropdown);
  const eventListeners = { onMouseEnter, onMouseLeave };
  return (0, import_jsx_runtime205.jsx)(Popover.Target, { refProp, ref, ...others, children: (0, import_react292.cloneElement)(
    children,
    eventPropsWrapperName ? { [eventPropsWrapperName]: eventListeners } : eventListeners
  ) });
});
HoverCardTarget.displayName = "@mantine/core/HoverCardTarget";

// node_modules/@mantine/core/esm/components/HoverCard/HoverCard.mjs
var defaultProps101 = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: false
};
function HoverCard(props) {
  const { children, onOpen, onClose, openDelay, closeDelay, initiallyOpened, ...others } = useProps(
    "HoverCard",
    defaultProps101,
    props
  );
  const [opened, { open, close }] = useDisclosure(initiallyOpened, { onClose, onOpen });
  const { openDropdown, closeDropdown } = useDelayedHover({ open, close, openDelay, closeDelay });
  return (0, import_jsx_runtime206.jsx)(HoverCardContextProvider, { value: { openDropdown, closeDropdown }, children: (0, import_jsx_runtime206.jsx)(Popover, { ...others, opened, __staticSelector: "HoverCard", children }) });
}
HoverCard.displayName = "@mantine/core/HoverCard";
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
HoverCard.extend = (input) => input;

// node_modules/@mantine/core/esm/components/Image/Image.mjs
var import_jsx_runtime207 = __toESM(require_jsx_runtime(), 1);
var import_react295 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Image/Image.module.css.mjs
var classes48 = { "root": "m_9e117634" };

// node_modules/@mantine/core/esm/components/Image/Image.mjs
var defaultProps102 = {};
var varsResolver49 = createVarsResolver((_, { radius, fit }) => ({
  root: {
    "--image-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--image-object-fit": fit
  }
}));
var Image = polymorphicFactory((_props, ref) => {
  const props = useProps("Image", defaultProps102, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onError,
    src,
    radius,
    fit,
    fallbackSrc,
    mod,
    ...others
  } = props;
  const [error2, setError] = (0, import_react295.useState)(!src);
  (0, import_react295.useEffect)(() => setError(!src), [src]);
  const getStyles2 = useStyles({
    name: "Image",
    classes: classes48,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver49
  });
  if (error2 && fallbackSrc) {
    return (0, import_jsx_runtime207.jsx)(
      Box,
      {
        component: "img",
        ref,
        src: fallbackSrc,
        ...getStyles2("root"),
        onError,
        mod: ["fallback", mod],
        ...others
      }
    );
  }
  return (0, import_jsx_runtime207.jsx)(
    Box,
    {
      component: "img",
      ref,
      ...getStyles2("root"),
      src,
      onError: (event) => {
        onError == null ? void 0 : onError(event);
        setError(true);
      },
      mod,
      ...others
    }
  );
});
Image.classes = classes48;
Image.displayName = "@mantine/core/Image";

// node_modules/@mantine/core/esm/components/Indicator/Indicator.mjs
var import_jsx_runtime209 = __toESM(require_jsx_runtime(), 1);
var import_react297 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Indicator/get-position-variables/get-position-variables.mjs
var import_react296 = __toESM(require_react(), 1);
var import_jsx_runtime208 = __toESM(require_jsx_runtime(), 1);
function getPositionVariables(_position = "top-end", offset4 = 0) {
  const variables = {
    "--indicator-top": void 0,
    "--indicator-bottom": void 0,
    "--indicator-left": void 0,
    "--indicator-right": void 0,
    "--indicator-translate-x": void 0,
    "--indicator-translate-y": void 0
  };
  const _offset = rem(offset4);
  const [position, placement] = _position.split("-");
  if (position === "top") {
    variables["--indicator-top"] = _offset;
    variables["--indicator-translate-y"] = "-50%";
  }
  if (position === "middle") {
    variables["--indicator-top"] = "50%";
    variables["--indicator-translate-y"] = "-50%";
  }
  if (position === "bottom") {
    variables["--indicator-bottom"] = _offset;
    variables["--indicator-translate-y"] = "50%";
  }
  if (placement === "start") {
    variables["--indicator-left"] = _offset;
    variables["--indicator-translate-x"] = "-50%";
  }
  if (placement === "center") {
    variables["--indicator-left"] = "50%";
    variables["--indicator-translate-x"] = "-50%";
  }
  if (placement === "end") {
    variables["--indicator-right"] = _offset;
    variables["--indicator-translate-x"] = "50%";
  }
  return variables;
}

// node_modules/@mantine/core/esm/components/Indicator/Indicator.module.css.mjs
var classes49 = { "root": "m_e5262200", "indicator": "m_760d1fb1", "processing": "m_885901b1" };

// node_modules/@mantine/core/esm/components/Indicator/Indicator.mjs
var defaultProps103 = {
  position: "top-end",
  offset: 0,
  inline: false,
  withBorder: false,
  disabled: false,
  processing: false
};
var varsResolver50 = createVarsResolver(
  (theme, { color, position, offset: offset4, size: size4, radius, zIndex, autoContrast }) => ({
    root: {
      "--indicator-color": color ? getThemeColor(color, theme) : void 0,
      "--indicator-text-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0,
      "--indicator-size": rem(size4),
      "--indicator-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--indicator-z-index": zIndex == null ? void 0 : zIndex.toString(),
      ...getPositionVariables(position, offset4)
    }
  })
);
var Indicator = factory((_props, ref) => {
  const props = useProps("Indicator", defaultProps103, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    position,
    offset: offset4,
    inline: inline4,
    label,
    radius,
    color,
    withBorder,
    disabled,
    processing,
    zIndex,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Indicator",
    classes: classes49,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver50
  });
  return (0, import_jsx_runtime209.jsxs)(Box, { ref, ...getStyles2("root"), mod: [{ inline: inline4 }, mod], ...others, children: [
    !disabled && (0, import_jsx_runtime209.jsx)(import_jsx_runtime209.Fragment, { children: (0, import_jsx_runtime209.jsx)(
      Box,
      {
        mod: { "with-label": !!label, "with-border": withBorder, processing },
        ...getStyles2("indicator"),
        children: label
      }
    ) }),
    children
  ] });
});
Indicator.classes = classes49;
Indicator.displayName = "@mantine/core/Indicator";

// node_modules/@mantine/core/esm/components/JsonInput/JsonInput.mjs
var import_jsx_runtime211 = __toESM(require_jsx_runtime(), 1);
var import_react301 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs
var import_jsx_runtime210 = __toESM(require_jsx_runtime(), 1);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends2() {
  return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
    }
    return n;
  }, _extends2.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r2[n];
  }
  return t;
}

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js
var React14 = __toESM(require_react());

// node_modules/use-latest/dist/use-latest.esm.js
var React13 = __toESM(require_react());

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react298 = __toESM(require_react());
var index3 = import_react298.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index3;

// node_modules/use-latest/dist/use-latest.esm.js
var useLatest = function useLatest2(value) {
  var ref = React13.useRef(value);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value;
  });
  return ref;
};

// node_modules/use-composed-ref/dist/use-composed-ref.esm.js
var import_react299 = __toESM(require_react());
var updateRef = function updateRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  ref.current = value;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = (0, import_react299.useRef)();
  return (0, import_react299.useCallback)(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var use_composed_ref_esm_default = useComposedRef;

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var forceHiddenStyles = function forceHiddenStyles2(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight2(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop2 = function noop3() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  React14.useLayoutEffect(function() {
    var handler = function handler2(ev) {
      return latestListener.current(ev);
    };
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  useListener(window, "resize", listener);
};
var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
  useListener(document.fonts, "loadingdone", listener);
};
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop2 : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop2 : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (props.style) {
    if ("maxHeight" in props.style) {
      throw new Error("Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.");
    }
    if ("minHeight" in props.style) {
      throw new Error("Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.");
    }
  }
  var isControlled = props.value !== void 0;
  var libRef = React14.useRef(null);
  var ref = use_composed_ref_esm_default(libRef, userRef);
  var heightRef = React14.useRef(0);
  var measurementsCacheRef = React14.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React14.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return React14.createElement("textarea", _extends2({}, props, {
      onChange: handleChange,
      ref
    }));
  }
};
var index4 = React14.forwardRef(TextareaAutosize);

// node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs
var import_react300 = __toESM(require_react(), 1);
var defaultProps104 = {};
var Textarea = factory((props, ref) => {
  const { autosize, maxRows, minRows, __staticSelector, resize, ...others } = useProps(
    "Textarea",
    defaultProps104,
    props
  );
  const shouldAutosize = autosize && getEnv() !== "test";
  const autosizeProps = shouldAutosize ? { maxRows, minRows } : {};
  return (0, import_jsx_runtime210.jsx)(
    InputBase,
    {
      component: shouldAutosize ? index4 : "textarea",
      ref,
      ...others,
      __staticSelector: __staticSelector || "Textarea",
      multiline: true,
      "data-no-overflow": autosize && maxRows === void 0 || void 0,
      __vars: { "--input-resize": resize },
      ...autosizeProps
    }
  );
});
Textarea.classes = InputBase.classes;
Textarea.displayName = "@mantine/core/Textarea";

// node_modules/@mantine/core/esm/components/JsonInput/validate-json/validate-json.mjs
function validateJson(value, deserialize) {
  if (typeof value === "string" && value.trim().length === 0) {
    return true;
  }
  try {
    deserialize(value);
    return true;
  } catch (e) {
    return false;
  }
}

// node_modules/@mantine/core/esm/components/JsonInput/JsonInput.mjs
var defaultProps105 = {
  serialize: JSON.stringify,
  deserialize: JSON.parse
};
var JsonInput = factory((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    formatOnBlur,
    validationError,
    serialize,
    deserialize,
    onFocus,
    onBlur,
    readOnly,
    error: error2,
    ...others
  } = useProps("JsonInput", defaultProps105, props);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const [valid, setValid] = (0, import_react301.useState)(validateJson(_value, deserialize));
  const handleFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setValid(true);
  };
  const handleBlur = (event) => {
    typeof onBlur === "function" && onBlur(event);
    const isValid = validateJson(event.currentTarget.value, deserialize);
    formatOnBlur && !readOnly && isValid && event.currentTarget.value.trim() !== "" && setValue(serialize(deserialize(event.currentTarget.value), null, 2));
    setValid(isValid);
  };
  return (0, import_jsx_runtime211.jsx)(
    Textarea,
    {
      value: _value,
      onChange: (event) => setValue(event.currentTarget.value),
      onFocus: handleFocus,
      onBlur: handleBlur,
      ref,
      readOnly,
      ...others,
      autoComplete: "off",
      __staticSelector: "JsonInput",
      error: valid ? error2 : validationError || true,
      "data-monospace": true
    }
  );
});
JsonInput.classes = InputBase.classes;
JsonInput.displayName = "@mantine/core/JsonInput";

// node_modules/@mantine/core/esm/components/Kbd/Kbd.mjs
var import_jsx_runtime212 = __toESM(require_jsx_runtime(), 1);
var import_react302 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Kbd/Kbd.module.css.mjs
var classes50 = { "root": "m_dc6f14e2" };

// node_modules/@mantine/core/esm/components/Kbd/Kbd.mjs
var defaultProps106 = {};
var varsResolver51 = createVarsResolver((_, { size: size4 }) => ({
  root: {
    "--kbd-fz": getSize(size4, "kbd-fz"),
    "--kbd-padding": getSize(size4, "kbd-padding")
  }
}));
var Kbd = factory((_props, ref) => {
  const props = useProps("Kbd", defaultProps106, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const getStyles2 = useStyles({
    name: "Kbd",
    classes: classes50,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver51
  });
  return (0, import_jsx_runtime212.jsx)(Box, { component: "kbd", ref, ...getStyles2("root"), ...others });
});
Kbd.classes = classes50;
Kbd.displayName = "@mantine/core/Kbd";

// node_modules/@mantine/core/esm/components/List/List.mjs
var import_jsx_runtime215 = __toESM(require_jsx_runtime(), 1);
var import_react305 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/List/List.context.mjs
var import_react303 = __toESM(require_react(), 1);
var import_jsx_runtime213 = __toESM(require_jsx_runtime(), 1);
var [ListProvider, useListContext] = createSafeContext(
  "List component was not found in tree"
);

// node_modules/@mantine/core/esm/components/List/ListItem/ListItem.mjs
var import_jsx_runtime214 = __toESM(require_jsx_runtime(), 1);
var import_react304 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/List/List.module.css.mjs
var classes51 = { "root": "m_abbac491", "item": "m_abb6bec2", "itemWrapper": "m_75cd9f71", "itemIcon": "m_60f83e5b" };

// node_modules/@mantine/core/esm/components/List/ListItem/ListItem.mjs
var defaultProps107 = {};
var ListItem = factory((_props, ref) => {
  const props = useProps("ListItem", defaultProps107, _props);
  const { classNames, className, style, styles, vars, icon, children, mod, ...others } = props;
  const ctx = useListContext();
  const _icon = icon || ctx.icon;
  const stylesApiProps = { classNames, styles };
  return (0, import_jsx_runtime214.jsx)(
    Box,
    {
      ...ctx.getStyles("item", { ...stylesApiProps, className, style }),
      component: "li",
      mod: [{ "with-icon": !!_icon, centered: ctx.center }, mod],
      ref,
      ...others,
      children: (0, import_jsx_runtime214.jsxs)("div", { ...ctx.getStyles("itemWrapper", stylesApiProps), children: [
        _icon && (0, import_jsx_runtime214.jsx)("span", { ...ctx.getStyles("itemIcon", stylesApiProps), children: _icon }),
        (0, import_jsx_runtime214.jsx)("span", { ...ctx.getStyles("itemLabel", stylesApiProps), children })
      ] })
    }
  );
});
ListItem.classes = classes51;
ListItem.displayName = "@mantine/core/ListItem";

// node_modules/@mantine/core/esm/components/List/List.mjs
var defaultProps108 = {
  type: "unordered"
};
var varsResolver52 = createVarsResolver((_, { size: size4, spacing }) => ({
  root: {
    "--list-fz": getFontSize(size4),
    "--list-lh": getLineHeight(size4),
    "--list-spacing": getSpacing(spacing)
  }
}));
var List = factory((_props, ref) => {
  const props = useProps("List", defaultProps108, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    type,
    withPadding,
    icon,
    spacing,
    center,
    listStyleType,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "List",
    classes: classes51,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver52
  });
  return (0, import_jsx_runtime215.jsx)(ListProvider, { value: { center, icon, getStyles: getStyles2 }, children: (0, import_jsx_runtime215.jsx)(
    Box,
    {
      ...getStyles2("root", { style: { listStyleType } }),
      component: type === "unordered" ? "ul" : "ol",
      mod: [{ "with-padding": withPadding }, mod],
      ref,
      ...others,
      children
    }
  ) });
});
List.classes = classes51;
List.displayName = "@mantine/core/List";
List.Item = ListItem;

// node_modules/@mantine/core/esm/components/LoadingOverlay/LoadingOverlay.mjs
var import_jsx_runtime216 = __toESM(require_jsx_runtime(), 1);
var import_react306 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/LoadingOverlay/LoadingOverlay.module.css.mjs
var classes52 = { "root": "m_6e45937b", "loader": "m_e8eb006c", "overlay": "m_df587f17" };

// node_modules/@mantine/core/esm/components/LoadingOverlay/LoadingOverlay.mjs
var defaultProps109 = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: getDefaultZIndex("overlay")
};
var varsResolver53 = createVarsResolver((_, { zIndex }) => ({
  root: {
    "--lo-z-index": zIndex == null ? void 0 : zIndex.toString()
  }
}));
var LoadingOverlay = factory((_props, ref) => {
  const props = useProps("LoadingOverlay", defaultProps109, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    transitionProps,
    loaderProps,
    overlayProps,
    visible: visible2,
    zIndex,
    ...others
  } = props;
  const theme = useMantineTheme();
  const getStyles2 = useStyles({
    name: "LoadingOverlay",
    classes: classes52,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver53
  });
  const _overlayProps = { ...defaultProps109.overlayProps, ...overlayProps };
  return (0, import_jsx_runtime216.jsx)(Transition, { transition: "fade", ...transitionProps, mounted: !!visible2, children: (transitionStyles) => (0, import_jsx_runtime216.jsxs)(Box, { ...getStyles2("root", { style: transitionStyles }), ref, ...others, children: [
    (0, import_jsx_runtime216.jsx)(Loader, { ...getStyles2("loader"), unstyled, ...loaderProps }),
    (0, import_jsx_runtime216.jsx)(
      Overlay,
      {
        ..._overlayProps,
        ...getStyles2("overlay"),
        darkHidden: true,
        unstyled,
        color: (overlayProps == null ? void 0 : overlayProps.color) || theme.white
      }
    ),
    (0, import_jsx_runtime216.jsx)(
      Overlay,
      {
        ..._overlayProps,
        ...getStyles2("overlay"),
        lightHidden: true,
        unstyled,
        color: (overlayProps == null ? void 0 : overlayProps.color) || theme.colors.dark[5]
      }
    )
  ] }) });
});
LoadingOverlay.classes = classes52;
LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";

// node_modules/@mantine/core/esm/components/Menu/Menu.mjs
var import_jsx_runtime223 = __toESM(require_jsx_runtime(), 1);
var import_react313 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Menu/Menu.context.mjs
var import_react307 = __toESM(require_react(), 1);
var import_jsx_runtime217 = __toESM(require_jsx_runtime(), 1);
var [MenuContextProvider, useMenuContext] = createSafeContext(
  "Menu component was not found in the tree"
);

// node_modules/@mantine/core/esm/components/Menu/MenuDivider/MenuDivider.mjs
var import_jsx_runtime218 = __toESM(require_jsx_runtime(), 1);
var import_react308 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Menu/Menu.module.css.mjs
var classes53 = { "dropdown": "m_dc9b7c9f", "label": "m_9bfac126", "divider": "m_efdf90cb", "item": "m_99ac2aa1", "itemLabel": "m_5476e0d3", "itemSection": "m_8b75e504" };

// node_modules/@mantine/core/esm/components/Menu/MenuDivider/MenuDivider.mjs
var defaultProps110 = {};
var MenuDivider = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "MenuDivider",
    defaultProps110,
    props
  );
  const ctx = useMenuContext();
  return (0, import_jsx_runtime218.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("divider", { className, style, styles, classNames }),
      ...others
    }
  );
});
MenuDivider.classes = classes53;
MenuDivider.displayName = "@mantine/core/MenuDivider";

// node_modules/@mantine/core/esm/components/Menu/MenuDropdown/MenuDropdown.mjs
var import_jsx_runtime219 = __toESM(require_jsx_runtime(), 1);
var import_react309 = __toESM(require_react(), 1);
var defaultProps111 = {};
var MenuDropdown = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onMouseEnter,
    onMouseLeave,
    children,
    ...others
  } = useProps("MenuDropdown", defaultProps111, props);
  const wrapperRef = (0, import_react309.useRef)(null);
  const ctx = useMenuContext();
  const handleKeyDown = (event) => {
    var _a, _b;
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      (_b = (_a = wrapperRef.current) == null ? void 0 : _a.querySelectorAll("[data-menu-item]:not(:disabled)")[0]) == null ? void 0 : _b.focus();
    }
  };
  const handleMouseEnter = createEventHandler(
    onMouseEnter,
    () => (ctx.trigger === "hover" || ctx.trigger === "click-hover") && ctx.openDropdown()
  );
  const handleMouseLeave = createEventHandler(
    onMouseLeave,
    () => (ctx.trigger === "hover" || ctx.trigger === "click-hover") && ctx.closeDropdown()
  );
  return (0, import_jsx_runtime219.jsxs)(
    Popover.Dropdown,
    {
      ...others,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      role: "menu",
      "aria-orientation": "vertical",
      ref: useMergedRef(ref, wrapperRef),
      ...ctx.getStyles("dropdown", {
        className,
        style,
        styles,
        classNames,
        withStaticClass: false
      }),
      tabIndex: -1,
      "data-menu-dropdown": true,
      onKeyDown: handleKeyDown,
      children: [
        (0, import_jsx_runtime219.jsx)("div", { tabIndex: -1, "data-autofocus": true, "aria-hidden": true, style: { outline: 0 } }),
        children
      ]
    }
  );
});
MenuDropdown.classes = classes53;
MenuDropdown.displayName = "@mantine/core/MenuDropdown";

// node_modules/@mantine/core/esm/components/Menu/MenuItem/MenuItem.mjs
var import_jsx_runtime220 = __toESM(require_jsx_runtime(), 1);
var import_react310 = __toESM(require_react(), 1);
var defaultProps112 = {};
var MenuItem = polymorphicFactory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    color,
    closeMenuOnClick,
    leftSection,
    rightSection,
    children,
    disabled,
    ...others
  } = useProps("MenuItem", defaultProps112, props);
  const ctx = useMenuContext();
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = (0, import_react310.useRef)();
  const itemIndex = ctx.getItemIndex(itemRef.current);
  const _others = others;
  const handleMouseLeave = createEventHandler(_others.onMouseLeave, () => ctx.setHovered(-1));
  const handleMouseEnter = createEventHandler(
    _others.onMouseEnter,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const handleClick = createEventHandler(_others.onClick, () => {
    if (typeof closeMenuOnClick === "boolean") {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });
  const handleFocus = createEventHandler(
    _others.onFocus,
    () => ctx.setHovered(ctx.getItemIndex(itemRef.current))
  );
  const colors = color ? theme.variantColorResolver({ color, theme, variant: "light" }) : void 0;
  const parsedThemeColor = color ? parseThemeColor({ color, theme }) : null;
  return (0, import_jsx_runtime220.jsxs)(
    UnstyledButton,
    {
      ...others,
      unstyled: ctx.unstyled,
      tabIndex: ctx.menuItemTabIndex,
      onFocus: handleFocus,
      ...ctx.getStyles("item", { className, style, styles, classNames }),
      ref: useMergedRef(itemRef, ref),
      role: "menuitem",
      disabled,
      "data-menu-item": true,
      "data-disabled": disabled || void 0,
      "data-hovered": ctx.hovered === itemIndex ? true : void 0,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: "[data-menu-item]",
        parentSelector: "[data-menu-dropdown]",
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: "vertical",
        onKeyDown: _others.onKeydown
      }),
      __vars: {
        "--menu-item-color": (parsedThemeColor == null ? void 0 : parsedThemeColor.isThemeColor) && (parsedThemeColor == null ? void 0 : parsedThemeColor.shade) === void 0 ? `var(--mantine-color-${parsedThemeColor.color}-6)` : colors == null ? void 0 : colors.color,
        "--menu-item-hover": colors == null ? void 0 : colors.hover
      },
      children: [
        leftSection && (0, import_jsx_runtime220.jsx)("div", { ...ctx.getStyles("itemSection", { styles, classNames }), "data-position": "left", children: leftSection }),
        children && (0, import_jsx_runtime220.jsx)("div", { ...ctx.getStyles("itemLabel", { styles, classNames }), children }),
        rightSection && (0, import_jsx_runtime220.jsx)("div", { ...ctx.getStyles("itemSection", { styles, classNames }), "data-position": "right", children: rightSection })
      ]
    }
  );
});
MenuItem.classes = classes53;
MenuItem.displayName = "@mantine/core/MenuItem";

// node_modules/@mantine/core/esm/components/Menu/MenuLabel/MenuLabel.mjs
var import_jsx_runtime221 = __toESM(require_jsx_runtime(), 1);
var import_react311 = __toESM(require_react(), 1);
var defaultProps113 = {};
var MenuLabel = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "MenuLabel",
    defaultProps113,
    props
  );
  const ctx = useMenuContext();
  return (0, import_jsx_runtime221.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("label", { className, style, styles, classNames }),
      ...others
    }
  );
});
MenuLabel.classes = classes53;
MenuLabel.displayName = "@mantine/core/MenuLabel";

// node_modules/@mantine/core/esm/components/Menu/MenuTarget/MenuTarget.mjs
var import_jsx_runtime222 = __toESM(require_jsx_runtime(), 1);
var import_react312 = __toESM(require_react(), 1);
var defaultProps114 = {
  refProp: "ref"
};
var MenuTarget = (0, import_react312.forwardRef)((props, ref) => {
  const { children, refProp, ...others } = useProps("MenuTarget", defaultProps114, props);
  if (!isElement(children)) {
    throw new Error(
      "Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useMenuContext();
  const onClick = createEventHandler(children.props.onClick, () => {
    if (ctx.trigger === "click") {
      ctx.toggleDropdown();
    } else if (ctx.trigger === "click-hover") {
      ctx.setOpenedViaClick(true);
      if (!ctx.opened) {
        ctx.openDropdown();
      }
    }
  });
  const onMouseEnter = createEventHandler(
    children.props.onMouseEnter,
    () => (ctx.trigger === "hover" || ctx.trigger === "click-hover") && ctx.openDropdown()
  );
  const onMouseLeave = createEventHandler(children.props.onMouseLeave, () => {
    if (ctx.trigger === "hover") {
      ctx.closeDropdown();
    } else if (ctx.trigger === "click-hover" && !ctx.openedViaClick) {
      ctx.closeDropdown();
    }
  });
  return (0, import_jsx_runtime222.jsx)(Popover.Target, { refProp, popupType: "menu", ref, ...others, children: (0, import_react312.cloneElement)(children, {
    onClick,
    onMouseEnter,
    onMouseLeave,
    "data-expanded": ctx.opened ? true : void 0
  }) });
});
MenuTarget.displayName = "@mantine/core/MenuTarget";

// node_modules/@mantine/core/esm/components/Menu/Menu.mjs
var defaultProps115 = {
  trapFocus: true,
  closeOnItemClick: true,
  clickOutsideEvents: ["mousedown", "touchstart", "keydown"],
  loop: true,
  trigger: "click",
  openDelay: 0,
  closeDelay: 100,
  menuItemTabIndex: -1
};
function Menu(_props) {
  const props = useProps("Menu", defaultProps115, _props);
  const {
    children,
    onOpen,
    onClose,
    opened,
    defaultOpened,
    trapFocus,
    onChange,
    closeOnItemClick,
    loop,
    closeOnEscape: closeOnEscape2,
    trigger,
    openDelay,
    closeDelay,
    classNames,
    styles,
    unstyled,
    variant,
    vars,
    menuItemTabIndex,
    keepMounted,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Menu",
    classes: classes53,
    props,
    classNames,
    styles,
    unstyled
  });
  const [hovered, { setHovered, resetHovered }] = useHovered();
  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange
  });
  const [openedViaClick, setOpenedViaClick] = (0, import_react313.useState)(false);
  const close = () => {
    setOpened(false);
    setOpenedViaClick(false);
    _opened && (onClose == null ? void 0 : onClose());
  };
  const open = () => {
    setOpened(true);
    !_opened && (onOpen == null ? void 0 : onOpen());
  };
  const toggleDropdown = () => {
    _opened ? close() : open();
  };
  const { openDropdown, closeDropdown } = useDelayedHover({ open, close, closeDelay, openDelay });
  const getItemIndex = (node) => getContextItemIndex("[data-menu-item]", "[data-menu-dropdown]", node);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  useDidUpdate(() => {
    resetHovered();
  }, [_opened]);
  return (0, import_jsx_runtime223.jsx)(
    MenuContextProvider,
    {
      value: {
        getStyles: getStyles2,
        opened: _opened,
        toggleDropdown,
        getItemIndex,
        hovered,
        setHovered,
        openedViaClick,
        setOpenedViaClick,
        closeOnItemClick,
        closeDropdown: trigger === "click" ? close : closeDropdown,
        openDropdown: trigger === "click" ? open : openDropdown,
        closeDropdownImmediately: close,
        loop,
        trigger,
        unstyled,
        menuItemTabIndex
      },
      children: (0, import_jsx_runtime223.jsx)(
        Popover,
        {
          ...others,
          opened: _opened,
          onChange: toggleDropdown,
          defaultOpened,
          trapFocus: keepMounted ? false : trapFocus,
          closeOnEscape: closeOnEscape2,
          __staticSelector: "Menu",
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          variant,
          keepMounted,
          children
        }
      )
    }
  );
}
Menu.extend = (input) => input;
Menu.classes = classes53;
Menu.displayName = "@mantine/core/Menu";
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Dropdown = MenuDropdown;
Menu.Target = MenuTarget;
Menu.Divider = MenuDivider;

// node_modules/@mantine/core/esm/components/Modal/Modal.mjs
var import_jsx_runtime232 = __toESM(require_jsx_runtime(), 1);
var import_react323 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Modal/ModalBody.mjs
var import_jsx_runtime225 = __toESM(require_jsx_runtime(), 1);
var import_react316 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs
var import_react315 = __toESM(require_react(), 1);
var import_jsx_runtime224 = __toESM(require_jsx_runtime(), 1);
var [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs
var classes54 = { "root": "m_9df02822", "content": "m_54c44539", "inner": "m_1f958f16", "header": "m_d0e2b9cd" };

// node_modules/@mantine/core/esm/components/Modal/ModalBody.mjs
var defaultProps116 = {};
var ModalBody = factory((_props, ref) => {
  const props = useProps("ModalBody", defaultProps116, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return (0, import_jsx_runtime225.jsx)(
    ModalBaseBody,
    {
      ref,
      ...ctx.getStyles("body", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalBody.classes = classes54;
ModalBody.displayName = "@mantine/core/ModalBody";

// node_modules/@mantine/core/esm/components/Modal/ModalCloseButton.mjs
var import_jsx_runtime226 = __toESM(require_jsx_runtime(), 1);
var import_react317 = __toESM(require_react(), 1);
var defaultProps117 = {};
var ModalCloseButton = factory((_props, ref) => {
  const props = useProps("ModalCloseButton", defaultProps117, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return (0, import_jsx_runtime226.jsx)(
    ModalBaseCloseButton,
    {
      ref,
      ...ctx.getStyles("close", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalCloseButton.classes = classes54;
ModalCloseButton.displayName = "@mantine/core/ModalCloseButton";

// node_modules/@mantine/core/esm/components/Modal/ModalContent.mjs
var import_jsx_runtime227 = __toESM(require_jsx_runtime(), 1);
var import_react318 = __toESM(require_react(), 1);
var defaultProps118 = {};
var ModalContent = factory((_props, ref) => {
  const props = useProps("ModalContent", defaultProps118, _props);
  const { classNames, className, style, styles, vars, children, ...others } = props;
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return (0, import_jsx_runtime227.jsx)(
    ModalBaseContent,
    {
      ...ctx.getStyles("content", { className, style, styles, classNames }),
      innerProps: ctx.getStyles("inner", { className, style, styles, classNames }),
      "data-full-screen": ctx.fullScreen || void 0,
      "data-modal-content": true,
      ref,
      ...others,
      children: (0, import_jsx_runtime227.jsx)(
        Scroll,
        {
          style: {
            maxHeight: ctx.fullScreen ? "100dvh" : `calc(100dvh - (${rem(ctx.yOffset)} * 2))`
          },
          children
        }
      )
    }
  );
});
ModalContent.classes = classes54;
ModalContent.displayName = "@mantine/core/ModalContent";

// node_modules/@mantine/core/esm/components/Modal/ModalHeader.mjs
var import_jsx_runtime228 = __toESM(require_jsx_runtime(), 1);
var import_react319 = __toESM(require_react(), 1);
var defaultProps119 = {};
var ModalHeader = factory((_props, ref) => {
  const props = useProps("ModalHeader", defaultProps119, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return (0, import_jsx_runtime228.jsx)(
    ModalBaseHeader,
    {
      ref,
      ...ctx.getStyles("header", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalHeader.classes = classes54;
ModalHeader.displayName = "@mantine/core/ModalHeader";

// node_modules/@mantine/core/esm/components/Modal/ModalOverlay.mjs
var import_jsx_runtime229 = __toESM(require_jsx_runtime(), 1);
var import_react320 = __toESM(require_react(), 1);
var defaultProps120 = {};
var ModalOverlay = factory((_props, ref) => {
  const props = useProps("ModalOverlay", defaultProps120, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return (0, import_jsx_runtime229.jsx)(
    ModalBaseOverlay,
    {
      ref,
      ...ctx.getStyles("overlay", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalOverlay.classes = classes54;
ModalOverlay.displayName = "@mantine/core/ModalOverlay";

// node_modules/@mantine/core/esm/components/Modal/ModalRoot.mjs
var import_jsx_runtime230 = __toESM(require_jsx_runtime(), 1);
var import_react321 = __toESM(require_react(), 1);
var defaultProps121 = {
  __staticSelector: "Modal",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  yOffset: "5dvh"
};
var varsResolver54 = createVarsResolver(
  (_, { radius, size: size4, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--modal-size": getSize(size4, "modal-size"),
      "--modal-y-offset": rem(yOffset),
      "--modal-x-offset": rem(xOffset)
    }
  })
);
var ModalRoot = factory((_props, ref) => {
  const props = useProps("ModalRoot", defaultProps121, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: __staticSelector,
    classes: classes54,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver54
  });
  return (0, import_jsx_runtime230.jsx)(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles: getStyles2, fullScreen }, children: (0, import_jsx_runtime230.jsx)(
    ModalBase,
    {
      ref,
      ...getStyles2("root"),
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0,
      unstyled,
      ...others
    }
  ) });
});
ModalRoot.classes = classes54;
ModalRoot.displayName = "@mantine/core/ModalRoot";

// node_modules/@mantine/core/esm/components/Modal/ModalTitle.mjs
var import_jsx_runtime231 = __toESM(require_jsx_runtime(), 1);
var import_react322 = __toESM(require_react(), 1);
var defaultProps122 = {};
var ModalTitle = factory((_props, ref) => {
  const props = useProps("ModalTitle", defaultProps122, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return (0, import_jsx_runtime231.jsx)(
    ModalBaseTitle,
    {
      ref,
      ...ctx.getStyles("title", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalTitle.classes = classes54;
ModalTitle.displayName = "@mantine/core/ModalTitle";

// node_modules/@mantine/core/esm/components/Modal/Modal.mjs
var defaultProps123 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  withOverlay: true,
  withCloseButton: true
};
var Modal = factory((_props, ref) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius,
    ...others
  } = useProps("Modal", defaultProps123, _props);
  const hasHeader = !!title || withCloseButton;
  return (0, import_jsx_runtime232.jsxs)(ModalRoot, { ref, radius, ...others, children: [
    withOverlay && (0, import_jsx_runtime232.jsx)(ModalOverlay, { ...overlayProps }),
    (0, import_jsx_runtime232.jsxs)(ModalContent, { radius, children: [
      hasHeader && (0, import_jsx_runtime232.jsxs)(ModalHeader, { children: [
        title && (0, import_jsx_runtime232.jsx)(ModalTitle, { children: title }),
        withCloseButton && (0, import_jsx_runtime232.jsx)(ModalCloseButton, { ...closeButtonProps })
      ] }),
      (0, import_jsx_runtime232.jsx)(ModalBody, { children })
    ] })
  ] });
});
Modal.classes = classes54;
Modal.displayName = "@mantine/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

// node_modules/@mantine/core/esm/components/MultiSelect/MultiSelect.mjs
var import_jsx_runtime240 = __toESM(require_jsx_runtime(), 1);
var import_react331 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Pill/Pill.mjs
var import_jsx_runtime236 = __toESM(require_jsx_runtime(), 1);
var import_react327 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/PillsInput/PillsInput.context.mjs
var import_react324 = __toESM(require_react(), 1);
var import_jsx_runtime233 = __toESM(require_jsx_runtime(), 1);
var [PillsInputProvider, usePillsInputContext] = createOptionalContext();

// node_modules/@mantine/core/esm/components/Pill/PillGroup.context.mjs
var import_react325 = __toESM(require_react(), 1);
var import_jsx_runtime234 = __toESM(require_jsx_runtime(), 1);
var [PillGroupProvider, usePillGroupContext] = createOptionalContext();

// node_modules/@mantine/core/esm/components/Pill/PillGroup/PillGroup.mjs
var import_jsx_runtime235 = __toESM(require_jsx_runtime(), 1);
var import_react326 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Pill/Pill.module.css.mjs
var classes55 = { "root": "m_7cda1cd6", "root--default": "m_44da308b", "root--contrast": "m_e3a01f8", "label": "m_1e0e6180", "remove": "m_ae386778", "group": "m_1dcfd90b" };

// node_modules/@mantine/core/esm/components/Pill/PillGroup/PillGroup.mjs
var defaultProps124 = {};
var varsResolver55 = createVarsResolver((_, { gap }, { size: size4 }) => ({
  group: {
    "--pg-gap": gap !== void 0 ? getSize(gap) : getSize(size4, "pg-gap")
  }
}));
var PillGroup = factory((_props, ref) => {
  const props = useProps("PillGroup", defaultProps124, _props);
  const { classNames, className, style, styles, unstyled, vars, size: size4, disabled, ...others } = props;
  const pillsInputCtx = usePillsInputContext();
  const _size = (pillsInputCtx == null ? void 0 : pillsInputCtx.size) || size4 || void 0;
  const getStyles2 = useStyles({
    name: "PillGroup",
    classes: classes55,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver55,
    stylesCtx: { size: _size },
    rootSelector: "group"
  });
  return (0, import_jsx_runtime235.jsx)(PillGroupProvider, { value: { size: _size, disabled }, children: (0, import_jsx_runtime235.jsx)(Box, { ref, size: _size, ...getStyles2("group"), ...others }) });
});
PillGroup.classes = classes55;
PillGroup.displayName = "@mantine/core/PillGroup";

// node_modules/@mantine/core/esm/components/Pill/Pill.mjs
var defaultProps125 = {
  variant: "default"
};
var varsResolver56 = createVarsResolver((_, { radius }, { size: size4 }) => ({
  root: {
    "--pill-fz": getSize(size4, "pill-fz"),
    "--pill-height": getSize(size4, "pill-height"),
    "--pill-radius": radius === void 0 ? void 0 : getRadius(radius)
  }
}));
var Pill = factory((_props, ref) => {
  const props = useProps("Pill", defaultProps125, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    variant,
    children,
    withRemoveButton,
    onRemove,
    removeButtonProps,
    radius,
    size: size4,
    disabled,
    mod,
    ...others
  } = props;
  const ctx = usePillGroupContext();
  const pillsInputCtx = usePillsInputContext();
  const _size = size4 || (ctx == null ? void 0 : ctx.size) || void 0;
  const _variant = (pillsInputCtx == null ? void 0 : pillsInputCtx.variant) === "filled" ? "contrast" : variant || "default";
  const getStyles2 = useStyles({
    name: "Pill",
    classes: classes55,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver56,
    stylesCtx: { size: _size }
  });
  return (0, import_jsx_runtime236.jsxs)(
    Box,
    {
      component: "span",
      ref,
      variant: _variant,
      size: _size,
      ...getStyles2("root", { variant: _variant }),
      mod: [
        { "with-remove": withRemoveButton && !disabled, disabled: disabled || (ctx == null ? void 0 : ctx.disabled) },
        mod
      ],
      ...others,
      children: [
        (0, import_jsx_runtime236.jsx)("span", { ...getStyles2("label"), children }),
        withRemoveButton && (0, import_jsx_runtime236.jsx)(
          CloseButton,
          {
            variant: "transparent",
            radius,
            tabIndex: -1,
            "aria-hidden": true,
            unstyled,
            ...removeButtonProps,
            ...getStyles2("remove", {
              className: removeButtonProps == null ? void 0 : removeButtonProps.className,
              style: removeButtonProps == null ? void 0 : removeButtonProps.style
            }),
            onMouseDown: (event) => {
              var _a;
              event.preventDefault();
              event.stopPropagation();
              (_a = removeButtonProps == null ? void 0 : removeButtonProps.onMouseDown) == null ? void 0 : _a.call(removeButtonProps, event);
            },
            onClick: (event) => {
              var _a;
              event.stopPropagation();
              onRemove == null ? void 0 : onRemove();
              (_a = removeButtonProps == null ? void 0 : removeButtonProps.onClick) == null ? void 0 : _a.call(removeButtonProps, event);
            }
          }
        )
      ]
    }
  );
});
Pill.classes = classes55;
Pill.displayName = "@mantine/core/Pill";
Pill.Group = PillGroup;

// node_modules/@mantine/core/esm/components/PillsInput/PillsInput.mjs
var import_jsx_runtime238 = __toESM(require_jsx_runtime(), 1);
var import_react329 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/PillsInput/PillsInputField/PillsInputField.mjs
var import_jsx_runtime237 = __toESM(require_jsx_runtime(), 1);
var import_react328 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/PillsInput/PillsInput.module.css.mjs
var classes56 = { "field": "m_45c4369d" };

// node_modules/@mantine/core/esm/components/PillsInput/PillsInputField/PillsInputField.mjs
var defaultProps126 = {
  type: "visible"
};
var PillsInputField = factory((_props, ref) => {
  const props = useProps("PillsInputField", defaultProps126, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    type,
    disabled,
    id,
    pointer,
    mod,
    ...others
  } = props;
  const ctx = usePillsInputContext();
  const inputWrapperCtx = useInputWrapperContext();
  const getStyles2 = useStyles({
    name: "PillsInputField",
    classes: classes56,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "field"
  });
  const _disabled = disabled || (ctx == null ? void 0 : ctx.disabled);
  return (0, import_jsx_runtime237.jsx)(
    Box,
    {
      component: "input",
      ref: useMergedRef(ref, ctx == null ? void 0 : ctx.fieldRef),
      "data-type": type,
      disabled: _disabled,
      mod: [{ disabled: _disabled, pointer }, mod],
      ...getStyles2("field"),
      ...others,
      id: (inputWrapperCtx == null ? void 0 : inputWrapperCtx.inputId) || id,
      "aria-invalid": ctx == null ? void 0 : ctx.hasError,
      "aria-describedby": inputWrapperCtx == null ? void 0 : inputWrapperCtx.describedBy,
      type: "text",
      onMouseDown: (event) => !pointer && event.stopPropagation()
    }
  );
});
PillsInputField.classes = classes56;
PillsInputField.displayName = "@mantine/core/PillsInputField";

// node_modules/@mantine/core/esm/components/PillsInput/PillsInput.mjs
var defaultProps127 = {};
var PillsInput = factory((_props, ref) => {
  const props = useProps("PillsInput", defaultProps127, _props);
  const {
    children,
    onMouseDown,
    onClick,
    size: size4,
    disabled,
    __staticSelector,
    error: error2,
    variant,
    ...others
  } = props;
  const fieldRef = (0, import_react329.useRef)();
  return (0, import_jsx_runtime238.jsx)(PillsInputProvider, { value: { fieldRef, size: size4, disabled, hasError: !!error2, variant }, children: (0, import_jsx_runtime238.jsx)(
    InputBase,
    {
      size: size4,
      error: error2,
      variant,
      component: "div",
      ref,
      onMouseDown: (event) => {
        var _a;
        event.preventDefault();
        onMouseDown == null ? void 0 : onMouseDown(event);
        (_a = fieldRef.current) == null ? void 0 : _a.focus();
      },
      onClick: (event) => {
        var _a;
        event.preventDefault();
        onClick == null ? void 0 : onClick(event);
        (_a = fieldRef.current) == null ? void 0 : _a.focus();
      },
      ...others,
      multiline: true,
      disabled,
      __staticSelector: __staticSelector || "PillsInput",
      withAria: false,
      children
    }
  ) });
});
PillsInput.displayName = "@mantine/core/PillsInput";
PillsInput.Field = PillsInputField;

// node_modules/@mantine/core/esm/components/MultiSelect/filter-picked-values.mjs
var import_jsx_runtime239 = __toESM(require_jsx_runtime(), 1);
var import_react330 = __toESM(require_react(), 1);
function filterPickedValues({ data, value }) {
  const normalizedValue = value.map((item) => item.trim().toLowerCase());
  const filtered = data.reduce((acc, item) => {
    if (isOptionsGroup(item)) {
      acc.push({
        group: item.group,
        items: item.items.filter(
          (option) => normalizedValue.indexOf(option.value.toLowerCase().trim()) === -1
        )
      });
    } else if (normalizedValue.indexOf(item.value.toLowerCase().trim()) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
  return filtered;
}

// node_modules/@mantine/core/esm/components/MultiSelect/MultiSelect.mjs
var defaultProps128 = {
  maxValues: Infinity,
  withCheckIcon: true,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
};
var MultiSelect = factory((_props, ref) => {
  const props = useProps("MultiSelect", defaultProps128, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size4,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    readOnly,
    disabled,
    onFocus,
    onBlur,
    onPaste,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error: error2,
    maxValues,
    searchable,
    nothingFoundMessage,
    withCheckIcon,
    checkIconPosition,
    hidePickedOptions,
    withErrorStyles,
    name,
    form,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    placeholder,
    hiddenInputValuesDivider,
    required,
    mod,
    renderOption,
    onRemove,
    onClear,
    scrollAreaProps,
    ...others
  } = props;
  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);
  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose == null ? void 0 : onDropdownClose();
      combobox.resetSelectedOption();
    }
  });
  const {
    styleProps,
    rest: { type, autoComplete, ...rest }
  } = extractStyleProps(others);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: "",
    onChange: onSearchChange
  });
  const getStyles2 = useStyles({
    name: "MultiSelect",
    classes: {},
    props,
    classNames,
    styles,
    unstyled
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  const handleInputKeydown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (event.key === " " && !searchable) {
      event.preventDefault();
      combobox.toggleDropdown();
    }
    if (event.key === "Backspace" && _searchValue.length === 0 && _value.length > 0) {
      onRemove == null ? void 0 : onRemove(_value[_value.length - 1]);
      setValue(_value.slice(0, _value.length - 1));
    }
  };
  const values2 = _value.map((item, index5) => {
    var _a, _b;
    return (0, import_jsx_runtime240.jsx)(
      Pill,
      {
        withRemoveButton: !readOnly && !((_a = optionsLockup[item]) == null ? void 0 : _a.disabled),
        onRemove: () => {
          setValue(_value.filter((i) => item !== i));
          onRemove == null ? void 0 : onRemove(item);
        },
        unstyled,
        disabled,
        ...getStyles2("pill"),
        children: ((_b = optionsLockup[item]) == null ? void 0 : _b.label) || item
      },
      `${item}-${index5}`
    );
  });
  (0, import_react331.useEffect)(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);
  const clearButton = clearable && _value.length > 0 && !disabled && !readOnly && (0, import_jsx_runtime240.jsx)(
    Combobox.ClearButton,
    {
      size: size4,
      ...clearButtonProps,
      onClear: () => {
        onClear == null ? void 0 : onClear();
        setValue([]);
        setSearchValue("");
      }
    }
  );
  const filteredData = filterPickedValues({ data: parsedData, value: _value });
  return (0, import_jsx_runtime240.jsxs)(import_jsx_runtime240.Fragment, { children: [
    (0, import_jsx_runtime240.jsxs)(
      Combobox,
      {
        store: combobox,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        size: size4,
        readOnly,
        __staticSelector: "MultiSelect",
        onOptionSubmit: (val) => {
          onOptionSubmit == null ? void 0 : onOptionSubmit(val);
          setSearchValue("");
          combobox.updateSelectedOptionIndex("selected");
          if (_value.includes(optionsLockup[val].value)) {
            setValue(_value.filter((v) => v !== optionsLockup[val].value));
            onRemove == null ? void 0 : onRemove(optionsLockup[val].value);
          } else if (_value.length < maxValues) {
            setValue([..._value, optionsLockup[val].value]);
          }
        },
        ...comboboxProps,
        children: [
          (0, import_jsx_runtime240.jsx)(Combobox.DropdownTarget, { children: (0, import_jsx_runtime240.jsx)(
            PillsInput,
            {
              ...styleProps,
              __staticSelector: "MultiSelect",
              classNames: resolvedClassNames,
              styles: resolvedStyles,
              unstyled,
              size: size4,
              className,
              style,
              variant,
              disabled,
              radius,
              rightSection: rightSection || clearButton || (0, import_jsx_runtime240.jsx)(Combobox.Chevron, { size: size4, error: error2, unstyled }),
              rightSectionPointerEvents: rightSectionPointerEvents || (clearButton ? "all" : "none"),
              rightSectionWidth,
              rightSectionProps,
              leftSection,
              leftSectionWidth,
              leftSectionPointerEvents,
              leftSectionProps,
              inputContainer,
              inputWrapperOrder,
              withAsterisk,
              labelProps,
              descriptionProps,
              errorProps,
              wrapperProps,
              description,
              label,
              error: error2,
              multiline: true,
              withErrorStyles,
              __stylesApiProps: {
                ...props,
                rightSectionPointerEvents: rightSectionPointerEvents || (clearButton ? "all" : "none"),
                multiline: true
              },
              pointer: !searchable,
              onClick: () => searchable ? combobox.openDropdown() : combobox.toggleDropdown(),
              "data-expanded": combobox.dropdownOpened || void 0,
              id: _id,
              required,
              mod,
              children: (0, import_jsx_runtime240.jsxs)(Pill.Group, { disabled, unstyled, ...getStyles2("pillsList"), children: [
                values2,
                (0, import_jsx_runtime240.jsx)(Combobox.EventsTarget, { autoComplete, children: (0, import_jsx_runtime240.jsx)(
                  PillsInput.Field,
                  {
                    ...rest,
                    ref,
                    id: _id,
                    placeholder,
                    type: !searchable && !placeholder ? "hidden" : "visible",
                    ...getStyles2("inputField"),
                    unstyled,
                    onFocus: (event) => {
                      onFocus == null ? void 0 : onFocus(event);
                      searchable && combobox.openDropdown();
                    },
                    onBlur: (event) => {
                      onBlur == null ? void 0 : onBlur(event);
                      combobox.closeDropdown();
                      setSearchValue("");
                    },
                    onKeyDown: handleInputKeydown,
                    value: _searchValue,
                    onChange: (event) => {
                      setSearchValue(event.currentTarget.value);
                      searchable && combobox.openDropdown();
                      selectFirstOptionOnChange && combobox.selectFirstOption();
                    },
                    disabled,
                    readOnly: readOnly || !searchable,
                    pointer: !searchable
                  }
                ) })
              ] })
            }
          ) }),
          (0, import_jsx_runtime240.jsx)(
            OptionsDropdown,
            {
              data: hidePickedOptions ? filteredData : parsedData,
              hidden: readOnly || disabled,
              filter,
              search: _searchValue,
              limit,
              hiddenWhenEmpty: !nothingFoundMessage,
              withScrollArea,
              maxDropdownHeight,
              filterOptions: searchable,
              value: _value,
              checkIconPosition,
              withCheckIcon,
              nothingFoundMessage,
              unstyled,
              labelId: label ? `${_id}-label` : void 0,
              "aria-label": label ? void 0 : others["aria-label"],
              renderOption,
              scrollAreaProps
            }
          )
        ]
      }
    ),
    (0, import_jsx_runtime240.jsx)(
      Combobox.HiddenInput,
      {
        name,
        valuesDivider: hiddenInputValuesDivider,
        value: _value,
        form,
        disabled,
        ...hiddenInputProps
      }
    )
  ] });
});
MultiSelect.classes = { ...InputBase.classes, ...Combobox.classes };
MultiSelect.displayName = "@mantine/core/MultiSelect";

// node_modules/@mantine/core/esm/components/NativeSelect/NativeSelect.mjs
var import_jsx_runtime242 = __toESM(require_jsx_runtime(), 1);
var import_react332 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/NativeSelect/NativeSelectOption.mjs
var import_jsx_runtime241 = __toESM(require_jsx_runtime(), 1);
function isGroup(input) {
  return "group" in input;
}
function NativeSelectOption({ data }) {
  if (isGroup(data)) {
    const items = data.items.map((item) => (0, import_jsx_runtime241.jsx)(NativeSelectOption, { data: item }, item.value));
    return (0, import_jsx_runtime241.jsx)("optgroup", { label: data.group, children: items });
  }
  const { value, label, ...others } = data;
  return (0, import_jsx_runtime241.jsx)("option", { value: data.value, ...others, children: data.label }, data.value);
}
NativeSelectOption.displayName = "@mantine/core/NativeSelectOption";

// node_modules/@mantine/core/esm/components/NativeSelect/NativeSelect.mjs
var defaultProps129 = {
  rightSectionPointerEvents: "none"
};
var NativeSelect = factory((props, ref) => {
  const { data, children, size: size4, error: error2, rightSection, unstyled, ...others } = useProps(
    "NativeSelect",
    defaultProps129,
    props
  );
  const options = getParsedComboboxData(data).map((item, index5) => (0, import_jsx_runtime242.jsx)(NativeSelectOption, { data: item }, index5));
  return (0, import_jsx_runtime242.jsx)(
    InputBase,
    {
      component: "select",
      ref,
      ...others,
      __staticSelector: "NativeSelect",
      size: size4,
      pointer: true,
      error: error2,
      unstyled,
      rightSection: rightSection || (0, import_jsx_runtime242.jsx)(ComboboxChevron, { size: size4, error: error2, unstyled }),
      children: children || options
    }
  );
});
NativeSelect.classes = InputBase.classes;
NativeSelect.displayName = "@mantine/core/NativeSelect";

// node_modules/@mantine/core/esm/components/NavLink/NavLink.mjs
var import_jsx_runtime243 = __toESM(require_jsx_runtime(), 1);
var import_react333 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/NavLink/NavLink.module.css.mjs
var classes57 = { "root": "m_f0824112", "description": "m_57492dcc", "section": "m_690090b5", "label": "m_1f6ac4c4", "body": "m_f07af9d2", "children": "m_e17b862f", "chevron": "m_1fd8a00b" };

// node_modules/@mantine/core/esm/components/NavLink/NavLink.mjs
var defaultProps130 = {};
var varsResolver57 = createVarsResolver(
  (theme, { variant, color, childrenOffset, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || "light",
      autoContrast
    });
    return {
      root: {
        "--nl-bg": color || variant ? colors.background : void 0,
        "--nl-hover": color || variant ? colors.hover : void 0,
        "--nl-color": color || variant ? colors.color : void 0
      },
      children: {
        "--nl-offset": getSpacing(childrenOffset)
      }
    };
  }
);
var NavLink = polymorphicFactory((_props, ref) => {
  const props = useProps("NavLink", defaultProps130, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    defaultOpened,
    onChange,
    children,
    onClick,
    active,
    disabled,
    leftSection,
    rightSection,
    label,
    description,
    disableRightSectionRotation,
    noWrap,
    childrenOffset,
    onKeyDown,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "NavLink",
    props,
    classes: classes57,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver57
  });
  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange
  });
  const withChildren = !!children;
  const handleClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    if (withChildren) {
      event.preventDefault();
      setOpened(!_opened);
    }
  };
  return (0, import_jsx_runtime243.jsxs)(import_jsx_runtime243.Fragment, { children: [
    (0, import_jsx_runtime243.jsxs)(
      UnstyledButton,
      {
        ...getStyles2("root"),
        component: "a",
        ref,
        onClick: handleClick,
        onKeyDown: (event) => {
          onKeyDown == null ? void 0 : onKeyDown(event);
          if (event.nativeEvent.code === "Space" && withChildren) {
            event.preventDefault();
            setOpened(!_opened);
          }
        },
        unstyled,
        mod: [{ disabled, active, expanded: _opened }, mod],
        ...others,
        children: [
          leftSection && (0, import_jsx_runtime243.jsx)(Box, { component: "span", ...getStyles2("section"), mod: { position: "left" }, children: leftSection }),
          (0, import_jsx_runtime243.jsxs)(Box, { ...getStyles2("body"), mod: { "no-wrap": noWrap }, children: [
            (0, import_jsx_runtime243.jsx)(Box, { component: "span", ...getStyles2("label"), children: label }),
            (0, import_jsx_runtime243.jsx)(Box, { component: "span", mod: { active }, ...getStyles2("description"), children: description })
          ] }),
          (withChildren || rightSection) && (0, import_jsx_runtime243.jsx)(
            Box,
            {
              ...getStyles2("section"),
              component: "span",
              mod: { rotate: _opened && !disableRightSectionRotation, position: "right" },
              children: withChildren ? rightSection || (0, import_jsx_runtime243.jsx)(AccordionChevron, { ...getStyles2("chevron") }) : rightSection
            }
          )
        ]
      }
    ),
    (0, import_jsx_runtime243.jsx)(Collapse, { in: _opened, ...getStyles2("collapse"), children: (0, import_jsx_runtime243.jsx)("div", { ...getStyles2("children"), children }) })
  ] });
});
NavLink.classes = classes57;
NavLink.displayName = "@mantine/core/NavLink";

// node_modules/@mantine/core/esm/components/Notification/Notification.mjs
var import_jsx_runtime244 = __toESM(require_jsx_runtime(), 1);
var import_react334 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Notification/Notification.module.css.mjs
var classes58 = { "root": "m_a513464", "icon": "m_a4ceffb", "loader": "m_b0920b15", "body": "m_a49ed24", "title": "m_3feedf16", "description": "m_3d733a3a", "closeButton": "m_919a4d88" };

// node_modules/@mantine/core/esm/components/Notification/Notification.mjs
var defaultProps131 = {
  withCloseButton: true
};
var varsResolver58 = createVarsResolver((theme, { radius, color }) => ({
  root: {
    "--notification-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--notification-color": color ? getThemeColor(color, theme) : void 0
  }
}));
var Notification = factory((_props, ref) => {
  const props = useProps("Notification", defaultProps131, _props);
  const {
    className,
    color,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    variant,
    vars,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Notification",
    classes: classes58,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver58
  });
  return (0, import_jsx_runtime244.jsxs)(
    Box,
    {
      ...getStyles2("root"),
      mod: [{ "data-with-icon": !!icon || loading, "data-with-border": withBorder }, mod],
      ref,
      variant,
      ...others,
      role: "alert",
      children: [
        icon && !loading && (0, import_jsx_runtime244.jsx)("div", { ...getStyles2("icon"), children: icon }),
        loading && (0, import_jsx_runtime244.jsx)(Loader, { size: 28, color, ...getStyles2("loader") }),
        (0, import_jsx_runtime244.jsxs)("div", { ...getStyles2("body"), children: [
          title && (0, import_jsx_runtime244.jsx)("div", { ...getStyles2("title"), children: title }),
          (0, import_jsx_runtime244.jsx)(Box, { ...getStyles2("description"), mod: { "data-with-title": !!title }, children })
        ] }),
        withCloseButton && (0, import_jsx_runtime244.jsx)(
          CloseButton,
          {
            iconSize: 16,
            color: "gray",
            ...closeButtonProps,
            unstyled,
            onClick: onClose,
            ...getStyles2("closeButton")
          }
        )
      ]
    }
  );
});
Notification.classes = classes58;
Notification.displayName = "@mantine/core/Notification";

// node_modules/@mantine/core/esm/components/NumberFormatter/NumberFormatter.mjs
var import_jsx_runtime245 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-number-format/dist/react-number-format.es.js
var import_react335 = __toESM(require_react());
function __rest2(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
      t[p] = s[p];
    }
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) {
        t[p[i]] = s[p[i]];
      }
    }
  }
  return t;
}
var SourceType;
(function(SourceType2) {
  SourceType2["event"] = "event";
  SourceType2["props"] = "prop";
})(SourceType || (SourceType = {}));
function noop4() {
}
function memoizeOnce(cb) {
  var lastArgs;
  var lastValue = void 0;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (lastArgs && args.length === lastArgs.length && args.every(function(value, index5) {
      return value === lastArgs[index5];
    })) {
      return lastValue;
    }
    lastArgs = args;
    lastValue = cb.apply(void 0, args);
    return lastValue;
  };
}
function charIsNumber(char) {
  return !!(char || "").match(/\d/);
}
function isNil(val) {
  return val === null || val === void 0;
}
function isNanValue(val) {
  return typeof val === "number" && isNaN(val);
}
function isNotValidValue(val) {
  return isNil(val) || isNanValue(val) || typeof val === "number" && !isFinite(val);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function getThousandsGroupRegex(thousandsGroupStyle) {
  switch (thousandsGroupStyle) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index5 = str.search(/[1-9]/);
  index5 = index5 === -1 ? str.length : index5;
  return str.substring(0, index5) + str.substring(index5, str.length).replace(thousandsGroupRegex, "$1" + thousandSeparator);
}
function usePersistentCallback(cb) {
  var callbackRef = (0, import_react335.useRef)(cb);
  callbackRef.current = cb;
  var persistentCbRef = (0, import_react335.useRef)(function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    return callbackRef.current.apply(callbackRef, args);
  });
  return persistentCbRef.current;
}
function splitDecimal(numStr, allowNegative) {
  if (allowNegative === void 0) allowNegative = true;
  var hasNegation = numStr[0] === "-";
  var addNegation = hasNegation && allowNegative;
  numStr = numStr.replace("-", "");
  var parts = numStr.split(".");
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || "";
  return {
    beforeDecimal,
    afterDecimal,
    hasNegation,
    addNegation
  };
}
function fixLeadingZero(numStr) {
  if (!numStr) {
    return numStr;
  }
  var isNegative = numStr[0] === "-";
  if (isNegative) {
    numStr = numStr.substring(1, numStr.length);
  }
  var parts = numStr.split(".");
  var beforeDecimal = parts[0].replace(/^0+/, "") || "0";
  var afterDecimal = parts[1] || "";
  return (isNegative ? "-" : "") + beforeDecimal + (afterDecimal ? "." + afterDecimal : "");
}
function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = "";
  var filler = fixedDecimalScale ? "0" : "";
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}
function repeat(str, count2) {
  return Array(count2 + 1).join(str);
}
function toNumericString(num) {
  var _num = num + "";
  var sign = _num[0] === "-" ? "-" : "";
  if (sign) {
    _num = _num.substring(1);
  }
  var ref = _num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];
  exponent = Number(exponent);
  if (!exponent) {
    return sign + coefficient;
  }
  coefficient = coefficient.replace(".", "");
  var decimalIndex = 1 + exponent;
  var coffiecientLn = coefficient.length;
  if (decimalIndex < 0) {
    coefficient = "0." + repeat("0", Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    coefficient = coefficient + repeat("0", decimalIndex - coffiecientLn);
  } else {
    coefficient = (coefficient.substring(0, decimalIndex) || "0") + "." + coefficient.substring(decimalIndex);
  }
  return sign + coefficient;
}
function roundToPrecision(numStr, scale, fixedDecimalScale) {
  if (["", "-"].indexOf(numStr) !== -1) {
    return numStr;
  }
  var shouldHaveDecimalSeparator = (numStr.indexOf(".") !== -1 || fixedDecimalScale) && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNegation = ref.hasNegation;
  var floatValue = parseFloat("0." + (afterDecimal || "0"));
  var floatValueStr = afterDecimal.length <= scale ? "0." + afterDecimal : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split(".");
  var intPart = beforeDecimal;
  if (beforeDecimal && Number(roundedDecimalParts[0])) {
    intPart = beforeDecimal.split("").reverse().reduce(function(roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);
  }
  var decimalPart = limitToScale(roundedDecimalParts[1] || "", scale, fixedDecimalScale);
  var negation = hasNegation ? "-" : "";
  var decimalSeparator = shouldHaveDecimalSeparator ? "." : "";
  return "" + negation + intPart + decimalSeparator + decimalPart;
}
function setCaretPosition(el, caretPos) {
  el.value = el.value;
  if (el !== null) {
    if (el.createTextRange) {
      var range3 = el.createTextRange();
      range3.move("character", caretPos);
      range3.select();
      return true;
    }
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }
    el.focus();
    return false;
  }
}
var findChangeRange = memoizeOnce(function(prevValue, newValue) {
  var i = 0, j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  }
  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }
  return {
    from: { start: i, end: prevLength - j },
    to: { start: i, end: newLength - j }
  };
});
var findChangedRangeFromCaretPositions = function(lastCaretPositions, currentCaretPosition) {
  var startPosition = Math.min(lastCaretPositions.selectionStart, currentCaretPosition);
  return {
    from: { start: startPosition, end: lastCaretPositions.selectionEnd },
    to: { start: startPosition, end: currentCaretPosition }
  };
};
function clamp4(num, min2, max2) {
  return Math.min(Math.max(num, min2), max2);
}
function geInputCaretPosition(el) {
  return Math.max(el.selectionStart, el.selectionEnd);
}
function addInputMode() {
  return typeof navigator !== "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function getDefaultChangeMeta(value) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: value.length
    },
    lastValue: ""
  };
}
function defaultIsCharacterSame(ref) {
  var currentValue = ref.currentValue;
  var formattedValue = ref.formattedValue;
  var currentValueIndex = ref.currentValueIndex;
  var formattedValueIndex = ref.formattedValueIndex;
  return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
}
function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, isCharacterSame) {
  if (isCharacterSame === void 0) isCharacterSame = defaultIsCharacterSame;
  var firstAllowedPosition = boundary.findIndex(function(b) {
    return b;
  });
  var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
  if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
    lastFormattedValue = prefixFormat;
    curValue = prefixFormat + curValue;
    curCaretPos = curCaretPos + prefixFormat.length;
  }
  var curValLn = curValue.length;
  var formattedValueLn = newFormattedValue.length;
  var addedIndexMap = {};
  var indexMap = new Array(curValLn);
  for (var i = 0; i < curValLn; i++) {
    indexMap[i] = -1;
    for (var j = 0, jLn = formattedValueLn; j < jLn; j++) {
      var isCharSame = isCharacterSame({
        currentValue: curValue,
        lastValue: lastFormattedValue,
        formattedValue: newFormattedValue,
        currentValueIndex: i,
        formattedValueIndex: j
      });
      if (isCharSame && addedIndexMap[j] !== true) {
        indexMap[i] = j;
        addedIndexMap[j] = true;
        break;
      }
    }
  }
  var pos = curCaretPos;
  while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
    pos++;
  }
  var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
  pos = curCaretPos - 1;
  while (pos > 0 && indexMap[pos] === -1) {
    pos--;
  }
  var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
  if (startIndex > endIndex) {
    return endIndex;
  }
  return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
}
function getCaretPosInBoundary(value, caretPos, boundary, direction) {
  var valLn = value.length;
  caretPos = clamp4(caretPos, 0, valLn);
  if (direction === "left") {
    while (caretPos >= 0 && !boundary[caretPos]) {
      caretPos--;
    }
    if (caretPos === -1) {
      caretPos = boundary.indexOf(true);
    }
  } else {
    while (caretPos <= valLn && !boundary[caretPos]) {
      caretPos++;
    }
    if (caretPos > valLn) {
      caretPos = boundary.lastIndexOf(true);
    }
  }
  if (caretPos === -1) {
    caretPos = valLn;
  }
  return caretPos;
}
function caretUnknownFormatBoundary(formattedValue) {
  var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
    return true;
  });
  for (var i = 0, ln = boundaryAry.length; i < ln; i++) {
    boundaryAry[i] = Boolean(charIsNumber(formattedValue[i]) || charIsNumber(formattedValue[i - 1]));
  }
  return boundaryAry;
}
function useInternalValues(value, defaultValue, valueIsNumericString, format2, removeFormatting2, onValueChange) {
  if (onValueChange === void 0) onValueChange = noop4;
  var getValues = usePersistentCallback(function(value2, valueIsNumericString2) {
    var formattedValue, numAsString;
    if (isNotValidValue(value2)) {
      numAsString = "";
      formattedValue = "";
    } else if (typeof value2 === "number" || valueIsNumericString2) {
      numAsString = typeof value2 === "number" ? toNumericString(value2) : value2;
      formattedValue = format2(numAsString);
    } else {
      numAsString = removeFormatting2(value2, void 0);
      formattedValue = format2(numAsString);
    }
    return { formattedValue, numAsString };
  });
  var ref = (0, import_react335.useState)(function() {
    return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
  });
  var values2 = ref[0];
  var setValues = ref[1];
  var _onValueChange = function(newValues2, sourceInfo) {
    if (newValues2.formattedValue !== values2.formattedValue) {
      setValues({
        formattedValue: newValues2.formattedValue,
        numAsString: newValues2.value
      });
    }
    onValueChange(newValues2, sourceInfo);
  };
  var _value = value;
  var _valueIsNumericString = valueIsNumericString;
  if (isNil(value)) {
    _value = values2.numAsString;
    _valueIsNumericString = true;
  }
  var newValues = getValues(_value, _valueIsNumericString);
  (0, import_react335.useMemo)(function() {
    setValues(newValues);
  }, [newValues.formattedValue]);
  return [values2, _onValueChange];
}
function defaultRemoveFormatting(value) {
  return value.replace(/[^0-9]/g, "");
}
function defaultFormat(value) {
  return value;
}
function NumberFormatBase(props) {
  var type = props.type;
  if (type === void 0) type = "text";
  var displayType = props.displayType;
  if (displayType === void 0) displayType = "input";
  var customInput = props.customInput;
  var renderText = props.renderText;
  var getInputRef = props.getInputRef;
  var format2 = props.format;
  if (format2 === void 0) format2 = defaultFormat;
  var removeFormatting2 = props.removeFormatting;
  if (removeFormatting2 === void 0) removeFormatting2 = defaultRemoveFormatting;
  var defaultValue = props.defaultValue;
  var valueIsNumericString = props.valueIsNumericString;
  var onValueChange = props.onValueChange;
  var isAllowed = props.isAllowed;
  var onChange = props.onChange;
  if (onChange === void 0) onChange = noop4;
  var onKeyDown = props.onKeyDown;
  if (onKeyDown === void 0) onKeyDown = noop4;
  var onMouseUp = props.onMouseUp;
  if (onMouseUp === void 0) onMouseUp = noop4;
  var onFocus = props.onFocus;
  if (onFocus === void 0) onFocus = noop4;
  var onBlur = props.onBlur;
  if (onBlur === void 0) onBlur = noop4;
  var propValue = props.value;
  var getCaretBoundary2 = props.getCaretBoundary;
  if (getCaretBoundary2 === void 0) getCaretBoundary2 = caretUnknownFormatBoundary;
  var isValidInputCharacter = props.isValidInputCharacter;
  if (isValidInputCharacter === void 0) isValidInputCharacter = charIsNumber;
  var isCharacterSame = props.isCharacterSame;
  var otherProps = __rest2(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]);
  var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format2, removeFormatting2, onValueChange);
  var ref_0 = ref[0];
  var formattedValue = ref_0.formattedValue;
  var numAsString = ref_0.numAsString;
  var onFormattedValueChange = ref[1];
  var caretPositionBeforeChange = (0, import_react335.useRef)();
  var lastUpdatedValue = (0, import_react335.useRef)({ formattedValue, numAsString });
  var _onValueChange = function(values2, source) {
    lastUpdatedValue.current = { formattedValue: values2.formattedValue, numAsString: values2.value };
    onFormattedValueChange(values2, source);
  };
  var ref$1 = (0, import_react335.useState)(false);
  var mounted = ref$1[0];
  var setMounted = ref$1[1];
  var focusedElm = (0, import_react335.useRef)(null);
  var timeout = (0, import_react335.useRef)({
    setCaretTimeout: null,
    focusTimeout: null
  });
  (0, import_react335.useEffect)(function() {
    setMounted(true);
    return function() {
      clearTimeout(timeout.current.setCaretTimeout);
      clearTimeout(timeout.current.focusTimeout);
    };
  }, []);
  var _format = format2;
  var getValueObject = function(formattedValue2, numAsString2) {
    var floatValue = parseFloat(numAsString2);
    return {
      formattedValue: formattedValue2,
      value: numAsString2,
      floatValue: isNaN(floatValue) ? void 0 : floatValue
    };
  };
  var setPatchedCaretPosition = function(el, caretPos, currentValue) {
    if (el.selectionStart === 0 && el.selectionEnd === el.value.length) {
      return;
    }
    setCaretPosition(el, caretPos);
    timeout.current.setCaretTimeout = setTimeout(function() {
      if (el.value === currentValue && el.selectionStart !== caretPos) {
        setCaretPosition(el, caretPos);
      }
    }, 0);
  };
  var correctCaretPosition = function(value, caretPos, direction) {
    return getCaretPosInBoundary(value, caretPos, getCaretBoundary2(value), direction);
  };
  var getNewCaretPosition = function(inputValue, newFormattedValue, caretPos) {
    var caretBoundary = getCaretBoundary2(newFormattedValue);
    var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
    updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
    return updatedCaretPos;
  };
  var updateValueAndCaretPosition = function(params) {
    var newFormattedValue = params.formattedValue;
    if (newFormattedValue === void 0) newFormattedValue = "";
    var input = params.input;
    var source = params.source;
    var event = params.event;
    var numAsString2 = params.numAsString;
    var caretPos;
    if (input) {
      var inputValue = params.inputValue || input.value;
      var currentCaretPosition2 = geInputCaretPosition(input);
      input.value = newFormattedValue;
      caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition2);
      if (caretPos !== void 0) {
        setPatchedCaretPosition(input, caretPos, newFormattedValue);
      }
    }
    if (newFormattedValue !== formattedValue) {
      _onValueChange(getValueObject(newFormattedValue, numAsString2), { event, source });
    }
  };
  (0, import_react335.useEffect)(function() {
    var ref2 = lastUpdatedValue.current;
    var lastFormattedValue = ref2.formattedValue;
    var lastNumAsString = ref2.numAsString;
    if (formattedValue !== lastFormattedValue || numAsString !== lastNumAsString) {
      _onValueChange(getValueObject(formattedValue, numAsString), {
        event: void 0,
        source: SourceType.props
      });
    }
  }, [formattedValue, numAsString]);
  var currentCaretPosition = focusedElm.current ? geInputCaretPosition(focusedElm.current) : void 0;
  var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? import_react335.useLayoutEffect : import_react335.useEffect;
  useIsomorphicLayoutEffect2(function() {
    var input = focusedElm.current;
    if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
      var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
      input.value = formattedValue;
      setPatchedCaretPosition(input, caretPos, formattedValue);
    }
  }, [formattedValue]);
  var formatInputValue = function(inputValue, event, source) {
    var input = event.target;
    var changeRange = caretPositionBeforeChange.current ? findChangedRangeFromCaretPositions(caretPositionBeforeChange.current, input.selectionEnd) : findChangeRange(formattedValue, inputValue);
    var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
    var _numAsString = removeFormatting2(inputValue, changeMeta);
    var _formattedValue = _format(_numAsString);
    _numAsString = removeFormatting2(_formattedValue, void 0);
    if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
      var input$1 = event.target;
      var currentCaretPosition2 = geInputCaretPosition(input$1);
      var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition2);
      input$1.value = formattedValue;
      setPatchedCaretPosition(input$1, caretPos, formattedValue);
      return false;
    }
    updateValueAndCaretPosition({
      formattedValue: _formattedValue,
      numAsString: _numAsString,
      inputValue,
      event,
      source,
      input: event.target
    });
    return true;
  };
  var setCaretPositionInfoBeforeChange = function(el, endOffset) {
    if (endOffset === void 0) endOffset = 0;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    caretPositionBeforeChange.current = { selectionStart, selectionEnd: selectionEnd + endOffset };
  };
  var _onChange = function(e) {
    var el = e.target;
    var inputValue = el.value;
    var changed = formatInputValue(inputValue, e, SourceType.event);
    if (changed) {
      onChange(e);
    }
    caretPositionBeforeChange.current = void 0;
  };
  var _onKeyDown = function(e) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value;
    if (value === void 0) value = "";
    var expectedCaretPosition;
    if (key === "ArrowLeft" || key === "Backspace") {
      expectedCaretPosition = Math.max(selectionStart - 1, 0);
    } else if (key === "ArrowRight") {
      expectedCaretPosition = Math.min(selectionStart + 1, value.length);
    } else if (key === "Delete") {
      expectedCaretPosition = selectionStart;
    }
    var endOffset = 0;
    if (key === "Delete" && selectionStart === selectionEnd) {
      endOffset = 1;
    }
    var isArrowKey = key === "ArrowLeft" || key === "ArrowRight";
    if (expectedCaretPosition === void 0 || selectionStart !== selectionEnd && !isArrowKey) {
      onKeyDown(e);
      setCaretPositionInfoBeforeChange(el, endOffset);
      return;
    }
    var newCaretPosition = expectedCaretPosition;
    if (isArrowKey) {
      var direction = key === "ArrowLeft" ? "left" : "right";
      newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
      if (newCaretPosition !== expectedCaretPosition) {
        e.preventDefault();
      }
    } else if (key === "Delete" && !isValidInputCharacter(value[expectedCaretPosition])) {
      newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "right");
    } else if (key === "Backspace" && !isValidInputCharacter(value[expectedCaretPosition])) {
      newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "left");
    }
    if (newCaretPosition !== expectedCaretPosition) {
      setPatchedCaretPosition(el, newCaretPosition, value);
    }
    onKeyDown(e);
    setCaretPositionInfoBeforeChange(el, endOffset);
  };
  var _onMouseUp = function(e) {
    var el = e.target;
    var correctCaretPositionIfRequired = function() {
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value;
      if (value === void 0) value = "";
      if (selectionStart === selectionEnd) {
        var caretPosition = correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart) {
          setPatchedCaretPosition(el, caretPosition, value);
        }
      }
    };
    correctCaretPositionIfRequired();
    requestAnimationFrame(function() {
      correctCaretPositionIfRequired();
    });
    onMouseUp(e);
    setCaretPositionInfoBeforeChange(el);
  };
  var _onFocus = function(e) {
    if (e.persist) {
      e.persist();
    }
    var el = e.target;
    var currentTarget = e.currentTarget;
    focusedElm.current = el;
    timeout.current.focusTimeout = setTimeout(function() {
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value;
      if (value === void 0) value = "";
      var caretPosition = correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
        setPatchedCaretPosition(el, caretPosition, value);
      }
      onFocus(Object.assign(Object.assign({}, e), { currentTarget }));
    }, 0);
  };
  var _onBlur = function(e) {
    focusedElm.current = null;
    clearTimeout(timeout.current.focusTimeout);
    clearTimeout(timeout.current.setCaretTimeout);
    onBlur(e);
  };
  var inputMode = mounted && addInputMode() ? "numeric" : void 0;
  var inputProps = Object.assign({ inputMode }, otherProps, {
    type,
    value: formattedValue,
    onChange: _onChange,
    onKeyDown: _onKeyDown,
    onMouseUp: _onMouseUp,
    onFocus: _onFocus,
    onBlur: _onBlur
  });
  if (displayType === "text") {
    return renderText ? import_react335.default.createElement(import_react335.default.Fragment, null, renderText(formattedValue, otherProps) || null) : import_react335.default.createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue);
  } else if (customInput) {
    var CustomInput = customInput;
    return import_react335.default.createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
  }
  return import_react335.default.createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
}
function format(numStr, props) {
  var decimalScale = props.decimalScale;
  var fixedDecimalScale = props.fixedDecimalScale;
  var prefix = props.prefix;
  if (prefix === void 0) prefix = "";
  var suffix = props.suffix;
  if (suffix === void 0) suffix = "";
  var allowNegative = props.allowNegative;
  var thousandsGroupStyle = props.thousandsGroupStyle;
  if (thousandsGroupStyle === void 0) thousandsGroupStyle = "thousand";
  if (numStr === "" || numStr === "-") {
    return numStr;
  }
  var ref = getSeparators(props);
  var thousandSeparator = ref.thousandSeparator;
  var decimalSeparator = ref.decimalSeparator;
  var hasDecimalSeparator = decimalScale !== 0 && numStr.indexOf(".") !== -1 || decimalScale && fixedDecimalScale;
  var ref$1 = splitDecimal(numStr, allowNegative);
  var beforeDecimal = ref$1.beforeDecimal;
  var afterDecimal = ref$1.afterDecimal;
  var addNegation = ref$1.addNegation;
  if (decimalScale !== void 0) {
    afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
  }
  if (thousandSeparator) {
    beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
  }
  if (prefix) {
    beforeDecimal = prefix + beforeDecimal;
  }
  if (suffix) {
    afterDecimal = afterDecimal + suffix;
  }
  if (addNegation) {
    beforeDecimal = "-" + beforeDecimal;
  }
  numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || "") + afterDecimal;
  return numStr;
}
function getSeparators(props) {
  var decimalSeparator = props.decimalSeparator;
  if (decimalSeparator === void 0) decimalSeparator = ".";
  var thousandSeparator = props.thousandSeparator;
  var allowedDecimalSeparators = props.allowedDecimalSeparators;
  if (thousandSeparator === true) {
    thousandSeparator = ",";
  }
  if (!allowedDecimalSeparators) {
    allowedDecimalSeparators = [decimalSeparator, "."];
  }
  return {
    decimalSeparator,
    thousandSeparator,
    allowedDecimalSeparators
  };
}
function handleNegation(value, allowNegative) {
  if (value === void 0) value = "";
  var negationRegex = new RegExp("(-)");
  var doubleNegationRegex = new RegExp("(-)(.)*(-)");
  var hasNegation = negationRegex.test(value);
  var removeNegation = doubleNegationRegex.test(value);
  value = value.replace(/-/g, "");
  if (hasNegation && !removeNegation && allowNegative) {
    value = "-" + value;
  }
  return value;
}
function getNumberRegex(decimalSeparator, global) {
  return new RegExp("(^-)|[0-9]|" + escapeRegExp(decimalSeparator), global ? "g" : void 0);
}
function isNumericString(val, prefix, suffix) {
  if (val === "") {
    return true;
  }
  return !(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === "string" && !isNaN(Number(val));
}
function removeFormatting(value, changeMeta, props) {
  var assign;
  if (changeMeta === void 0) changeMeta = getDefaultChangeMeta(value);
  var allowNegative = props.allowNegative;
  var prefix = props.prefix;
  if (prefix === void 0) prefix = "";
  var suffix = props.suffix;
  if (suffix === void 0) suffix = "";
  var decimalScale = props.decimalScale;
  var from = changeMeta.from;
  var to = changeMeta.to;
  var start = to.start;
  var end = to.end;
  var ref = getSeparators(props);
  var allowedDecimalSeparators = ref.allowedDecimalSeparators;
  var decimalSeparator = ref.decimalSeparator;
  var isBeforeDecimalSeparator = value[end] === decimalSeparator;
  if (charIsNumber(value) && (value === prefix || value === suffix) && changeMeta.lastValue === "") {
    return value;
  }
  if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
    var separator = decimalScale === 0 ? "" : decimalSeparator;
    value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
  }
  var stripNegation = function(value2, start2, end2) {
    var hasNegation2 = false;
    var hasDoubleNegation = false;
    if (prefix.startsWith("-")) {
      hasNegation2 = false;
    } else if (value2.startsWith("--")) {
      hasNegation2 = false;
      hasDoubleNegation = true;
    } else if (suffix.startsWith("-") && value2.length === suffix.length) {
      hasNegation2 = false;
    } else if (value2[0] === "-") {
      hasNegation2 = true;
    }
    var charsToRemove = hasNegation2 ? 1 : 0;
    if (hasDoubleNegation) {
      charsToRemove = 2;
    }
    if (charsToRemove) {
      value2 = value2.substring(charsToRemove);
      start2 -= charsToRemove;
      end2 -= charsToRemove;
    }
    return { value: value2, start: start2, end: end2, hasNegation: hasNegation2 };
  };
  var toMetadata = stripNegation(value, start, end);
  var hasNegation = toMetadata.hasNegation;
  assign = toMetadata, value = assign.value, start = assign.start, end = assign.end;
  var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
  var fromStart = ref$1.start;
  var fromEnd = ref$1.end;
  var lastValue = ref$1.value;
  var updatedSuffixPart = value.substring(start, end);
  if (value.length && lastValue.length && (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) && !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
    value = lastValue;
  }
  var startIndex = 0;
  if (value.startsWith(prefix)) {
    startIndex += prefix.length;
  } else if (start < prefix.length) {
    startIndex = start;
  }
  value = value.substring(startIndex);
  end -= startIndex;
  var endIndex = value.length;
  var suffixStartIndex = value.length - suffix.length;
  if (value.endsWith(suffix)) {
    endIndex = suffixStartIndex;
  } else if (end > suffixStartIndex) {
    endIndex = end;
  } else if (end > value.length - suffix.length) {
    endIndex = end;
  }
  value = value.substring(0, endIndex);
  value = handleNegation(hasNegation ? "-" + value : value, allowNegative);
  value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join("");
  var firstIndex = value.indexOf(decimalSeparator);
  value = value.replace(new RegExp(escapeRegExp(decimalSeparator), "g"), function(match, index5) {
    return index5 === firstIndex ? "." : "";
  });
  var ref$2 = splitDecimal(value, allowNegative);
  var beforeDecimal = ref$2.beforeDecimal;
  var afterDecimal = ref$2.afterDecimal;
  var addNegation = ref$2.addNegation;
  if (to.end - to.start < from.end - from.start && beforeDecimal === "" && isBeforeDecimalSeparator && !parseFloat(afterDecimal)) {
    value = addNegation ? "-" : "";
  }
  return value;
}
function getCaretBoundary(formattedValue, props) {
  var prefix = props.prefix;
  if (prefix === void 0) prefix = "";
  var suffix = props.suffix;
  if (suffix === void 0) suffix = "";
  var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
    return true;
  });
  var hasNegation = formattedValue[0] === "-";
  boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
  var valLn = formattedValue.length;
  boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
  return boundaryAry;
}
function validateAndUpdateProps(props) {
  var ref = getSeparators(props);
  var thousandSeparator = ref.thousandSeparator;
  var decimalSeparator = ref.decimalSeparator;
  var prefix = props.prefix;
  if (prefix === void 0) prefix = "";
  var allowNegative = props.allowNegative;
  if (allowNegative === void 0) allowNegative = true;
  if (thousandSeparator === decimalSeparator) {
    throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + decimalSeparator + " (default value for decimalSeparator is .)\n     ");
  }
  if (prefix.startsWith("-") && allowNegative) {
    console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    ");
    allowNegative = false;
  }
  return Object.assign(Object.assign({}, props), { allowNegative });
}
function useNumericFormat(props) {
  props = validateAndUpdateProps(props);
  var _decimalSeparator = props.decimalSeparator;
  var _allowedDecimalSeparators = props.allowedDecimalSeparators;
  var thousandsGroupStyle = props.thousandsGroupStyle;
  var suffix = props.suffix;
  var allowNegative = props.allowNegative;
  var allowLeadingZeros = props.allowLeadingZeros;
  var onKeyDown = props.onKeyDown;
  if (onKeyDown === void 0) onKeyDown = noop4;
  var onBlur = props.onBlur;
  if (onBlur === void 0) onBlur = noop4;
  var thousandSeparator = props.thousandSeparator;
  var decimalScale = props.decimalScale;
  var fixedDecimalScale = props.fixedDecimalScale;
  var prefix = props.prefix;
  if (prefix === void 0) prefix = "";
  var defaultValue = props.defaultValue;
  var value = props.value;
  var valueIsNumericString = props.valueIsNumericString;
  var onValueChange = props.onValueChange;
  var restProps = __rest2(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
  var ref = getSeparators(props);
  var decimalSeparator = ref.decimalSeparator;
  var allowedDecimalSeparators = ref.allowedDecimalSeparators;
  var _format = function(numStr) {
    return format(numStr, props);
  };
  var _removeFormatting = function(inputValue, changeMeta) {
    return removeFormatting(inputValue, changeMeta, props);
  };
  var _value = isNil(value) ? defaultValue : value;
  var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
  if (!isNil(value)) {
    _valueIsNumericString = _valueIsNumericString || typeof value === "number";
  } else if (!isNil(defaultValue)) {
    _valueIsNumericString = _valueIsNumericString || typeof defaultValue === "number";
  }
  var roundIncomingValueToPrecision = function(value2) {
    if (isNotValidValue(value2)) {
      return value2;
    }
    if (typeof value2 === "number") {
      value2 = toNumericString(value2);
    }
    if (_valueIsNumericString && typeof decimalScale === "number") {
      return roundToPrecision(value2, decimalScale, Boolean(fixedDecimalScale));
    }
    return value2;
  };
  var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
  var ref$1_0 = ref$1[0];
  var numAsString = ref$1_0.numAsString;
  var formattedValue = ref$1_0.formattedValue;
  var _onValueChange = ref$1[1];
  var _onKeyDown = function(e) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value2 = el.value;
    if (value2 === void 0) value2 = "";
    if ((key === "Backspace" || key === "Delete") && selectionEnd < prefix.length) {
      e.preventDefault();
      return;
    }
    if (selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }
    if (key === "Backspace" && value2[0] === "-" && selectionStart === prefix.length + 1 && allowNegative) {
      setCaretPosition(el, 1);
    }
    if (decimalScale && fixedDecimalScale) {
      if (key === "Backspace" && value2[selectionStart - 1] === decimalSeparator) {
        setCaretPosition(el, selectionStart - 1);
        e.preventDefault();
      } else if (key === "Delete" && value2[selectionStart] === decimalSeparator) {
        e.preventDefault();
      }
    }
    if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value2[selectionStart] === decimalSeparator) {
      setCaretPosition(el, selectionStart + 1);
    }
    var _thousandSeparator = thousandSeparator === true ? "," : thousandSeparator;
    if (key === "Backspace" && value2[selectionStart - 1] === _thousandSeparator) {
      setCaretPosition(el, selectionStart - 1);
    }
    if (key === "Delete" && value2[selectionStart] === _thousandSeparator) {
      setCaretPosition(el, selectionStart + 1);
    }
    onKeyDown(e);
  };
  var _onBlur = function(e) {
    var _value2 = numAsString;
    if (!_value2.match(/\d/g)) {
      _value2 = "";
    }
    if (!allowLeadingZeros) {
      _value2 = fixLeadingZero(_value2);
    }
    if (fixedDecimalScale && decimalScale) {
      _value2 = roundToPrecision(_value2, decimalScale, fixedDecimalScale);
    }
    if (_value2 !== numAsString) {
      var formattedValue2 = format(_value2, props);
      _onValueChange({
        formattedValue: formattedValue2,
        value: _value2,
        floatValue: parseFloat(_value2)
      }, {
        event: e,
        source: SourceType.event
      });
    }
    onBlur(e);
  };
  var isValidInputCharacter = function(inputChar) {
    if (inputChar === decimalSeparator) {
      return true;
    }
    return charIsNumber(inputChar);
  };
  var isCharacterSame = function(ref2) {
    var currentValue = ref2.currentValue;
    var lastValue = ref2.lastValue;
    var formattedValue2 = ref2.formattedValue;
    var currentValueIndex = ref2.currentValueIndex;
    var formattedValueIndex = ref2.formattedValueIndex;
    var curChar = currentValue[currentValueIndex];
    var newChar = formattedValue2[formattedValueIndex];
    var typedRange = findChangeRange(lastValue, currentValue);
    var to = typedRange.to;
    if (currentValueIndex >= to.start && currentValueIndex < to.end && allowedDecimalSeparators && allowedDecimalSeparators.includes(curChar) && newChar === decimalSeparator) {
      return true;
    }
    return curChar === newChar;
  };
  return Object.assign(Object.assign({}, restProps), {
    value: formattedValue,
    valueIsNumericString: false,
    isValidInputCharacter,
    isCharacterSame,
    onValueChange: _onValueChange,
    format: _format,
    removeFormatting: _removeFormatting,
    getCaretBoundary: function(formattedValue2) {
      return getCaretBoundary(formattedValue2, props);
    },
    onKeyDown: _onKeyDown,
    onBlur: _onBlur
  });
}
function NumericFormat(props) {
  var numericFormatProps = useNumericFormat(props);
  return import_react335.default.createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
}

// node_modules/@mantine/core/esm/components/NumberFormatter/NumberFormatter.mjs
var import_react336 = __toESM(require_react(), 1);
var defaultProps132 = {};
function NumberFormatter(_props) {
  const props = useProps("NumberFormatter", defaultProps132, _props);
  const { value, defaultValue, ...others } = props;
  if (value === void 0) {
    return null;
  }
  return (0, import_jsx_runtime245.jsx)(NumericFormat, { displayType: "text", value, ...others });
}
var extendNumberFormatter = (c) => c;
NumberFormatter.extend = extendNumberFormatter;
NumberFormatter.displayName = "@mantine/core/NumberFormatter";

// node_modules/@mantine/core/esm/components/NumberInput/NumberInput.mjs
var import_jsx_runtime247 = __toESM(require_jsx_runtime(), 1);
var import_react337 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/NumberInput/NumberInputChevron.mjs
var import_jsx_runtime246 = __toESM(require_jsx_runtime(), 1);
function NumberInputChevron({ direction, style, ...others }) {
  return (0, import_jsx_runtime246.jsx)(
    "svg",
    {
      style: {
        width: "var(--ni-chevron-size)",
        height: "var(--ni-chevron-size)",
        transform: direction === "up" ? "rotate(180deg)" : void 0,
        ...style
      },
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...others,
      children: (0, import_jsx_runtime246.jsx)(
        "path",
        {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}

// node_modules/@mantine/core/esm/components/NumberInput/NumberInput.module.css.mjs
var classes59 = { "root": "m_e2f5cd4e", "controls": "m_95e17d22", "control": "m_80b4b171" };

// node_modules/@mantine/core/esm/components/NumberInput/NumberInput.mjs
var leadingDecimalZeroPattern = /^(0\.0*|-0(\.0*)?)$/;
var leadingZerosPattern = /^-?0\d+(\.\d+)?\.?$/;
function isValidNumber(value) {
  return (typeof value === "number" ? value < Number.MAX_SAFE_INTEGER : !Number.isNaN(Number(value))) && !Number.isNaN(value);
}
function isInRange(value, min2, max2) {
  if (value === void 0) {
    return true;
  }
  const minValid = min2 === void 0 || value >= min2;
  const maxValid = max2 === void 0 || value <= max2;
  return minValid && maxValid;
}
var defaultProps133 = {
  step: 1,
  clampBehavior: "blur",
  allowDecimal: true,
  allowNegative: true,
  withKeyboardEvents: true,
  allowLeadingZeros: true,
  trimLeadingZeroesOnBlur: true,
  startValue: 0
};
var varsResolver59 = createVarsResolver((_, { size: size4 }) => ({
  controls: {
    "--ni-chevron-size": getSize(size4, "ni-chevron-size")
  }
}));
var NumberInput = factory((_props, ref) => {
  const props = useProps("NumberInput", defaultProps133, _props);
  const {
    className,
    classNames,
    styles,
    unstyled,
    vars,
    onChange,
    onValueChange,
    value,
    defaultValue,
    max: max2,
    min: min2,
    step,
    hideControls,
    rightSection,
    isAllowed,
    clampBehavior,
    onBlur,
    allowDecimal,
    decimalScale,
    onKeyDown,
    onKeyDownCapture,
    handlersRef,
    startValue,
    disabled,
    rightSectionPointerEvents,
    allowNegative,
    readOnly,
    size: size4,
    rightSectionWidth,
    stepHoldInterval,
    stepHoldDelay,
    allowLeadingZeros,
    withKeyboardEvents,
    trimLeadingZeroesOnBlur,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "NumberInput",
    classes: classes59,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver59
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    onChange
  });
  const shouldUseStepInterval = stepHoldDelay !== void 0 && stepHoldInterval !== void 0;
  const inputRef = (0, import_react337.useRef)(null);
  const onStepTimeoutRef = (0, import_react337.useRef)(null);
  const stepCountRef = (0, import_react337.useRef)(0);
  const handleValueChange = (payload, event) => {
    if (event.source === "event") {
      setValue(
        isValidNumber(payload.floatValue) && !leadingDecimalZeroPattern.test(payload.value) && !(allowLeadingZeros ? leadingZerosPattern.test(payload.value) : false) ? payload.floatValue : payload.value
      );
    }
    onValueChange == null ? void 0 : onValueChange(payload, event);
  };
  const getDecimalPlaces = (inputValue) => {
    const match = String(inputValue).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
      return 0;
    }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
  };
  const adjustCursor = (position) => {
    if (inputRef.current && typeof position !== "undefined") {
      inputRef.current.setSelectionRange(position, position);
    }
  };
  const incrementRef = (0, import_react337.useRef)();
  incrementRef.current = () => {
    let val;
    const currentValuePrecision = getDecimalPlaces(_value);
    const stepPrecision = getDecimalPlaces(step);
    const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
    const factor = 10 ** maxPrecision;
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      val = clamp(startValue, min2, max2);
    } else if (max2 !== void 0) {
      const incrementedValue = (Math.round(_value * factor) + Math.round(step * factor)) / factor;
      val = incrementedValue <= max2 ? incrementedValue : max2;
    } else {
      val = (Math.round(_value * factor) + Math.round(step * factor)) / factor;
    }
    const formattedValue = val.toFixed(maxPrecision);
    setValue(parseFloat(formattedValue));
    onValueChange == null ? void 0 : onValueChange(
      { floatValue: parseFloat(formattedValue), formattedValue, value: formattedValue },
      { source: "increment" }
    );
    setTimeout(() => {
      var _a;
      return adjustCursor((_a = inputRef.current) == null ? void 0 : _a.value.length);
    }, 0);
  };
  const decrementRef = (0, import_react337.useRef)();
  decrementRef.current = () => {
    let val;
    const minValue = min2 !== void 0 ? min2 : !allowNegative ? 0 : Number.MIN_SAFE_INTEGER;
    const currentValuePrecision = getDecimalPlaces(_value);
    const stepPrecision = getDecimalPlaces(step);
    const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
    const factor = 10 ** maxPrecision;
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      val = clamp(startValue, minValue, max2);
    } else {
      const decrementedValue = (Math.round(_value * factor) - Math.round(step * factor)) / factor;
      val = minValue !== void 0 && decrementedValue < minValue ? minValue : decrementedValue;
    }
    const formattedValue = val.toFixed(maxPrecision);
    setValue(parseFloat(formattedValue));
    onValueChange == null ? void 0 : onValueChange(
      { floatValue: parseFloat(formattedValue), formattedValue, value: formattedValue },
      { source: "decrement" }
    );
    setTimeout(() => {
      var _a;
      return adjustCursor((_a = inputRef.current) == null ? void 0 : _a.value.length);
    }, 0);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (readOnly || !withKeyboardEvents) {
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      incrementRef.current();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      decrementRef.current();
    }
  };
  const handleKeyDownCapture = (event) => {
    onKeyDownCapture == null ? void 0 : onKeyDownCapture(event);
    if (event.key === "Backspace") {
      const input = inputRef.current;
      if (input.selectionStart === 0 && input.selectionStart === input.selectionEnd) {
        event.preventDefault();
        window.setTimeout(() => adjustCursor(0), 0);
      }
    }
  };
  assignRef2(handlersRef, { increment: incrementRef.current, decrement: decrementRef.current });
  const onStepHandleChange = (isIncrement) => {
    if (isIncrement) {
      incrementRef.current();
    } else {
      decrementRef.current();
    }
    stepCountRef.current += 1;
  };
  const onStepLoop = (isIncrement) => {
    onStepHandleChange(isIncrement);
    if (shouldUseStepInterval) {
      const interval = typeof stepHoldInterval === "number" ? stepHoldInterval : stepHoldInterval(stepCountRef.current);
      onStepTimeoutRef.current = window.setTimeout(() => onStepLoop(isIncrement), interval);
    }
  };
  const onStep = (event, isIncrement) => {
    var _a;
    event.preventDefault();
    (_a = inputRef.current) == null ? void 0 : _a.focus();
    onStepHandleChange(isIncrement);
    if (shouldUseStepInterval) {
      onStepTimeoutRef.current = window.setTimeout(() => onStepLoop(isIncrement), stepHoldDelay);
    }
  };
  const onStepDone = () => {
    if (onStepTimeoutRef.current) {
      window.clearTimeout(onStepTimeoutRef.current);
    }
    onStepTimeoutRef.current = null;
    stepCountRef.current = 0;
  };
  const controls = (0, import_jsx_runtime247.jsxs)("div", { ...getStyles2("controls"), children: [
    (0, import_jsx_runtime247.jsx)(
      UnstyledButton,
      {
        ...getStyles2("control"),
        tabIndex: -1,
        "aria-hidden": true,
        disabled: disabled || typeof _value === "number" && max2 !== void 0 && _value >= max2,
        mod: { direction: "up" },
        onMouseDown: (event) => event.preventDefault(),
        onPointerDown: (event) => {
          onStep(event, true);
        },
        onPointerUp: onStepDone,
        onPointerLeave: onStepDone,
        children: (0, import_jsx_runtime247.jsx)(NumberInputChevron, { direction: "up" })
      }
    ),
    (0, import_jsx_runtime247.jsx)(
      UnstyledButton,
      {
        ...getStyles2("control"),
        tabIndex: -1,
        "aria-hidden": true,
        disabled: disabled || typeof _value === "number" && min2 !== void 0 && _value <= min2,
        mod: { direction: "down" },
        onMouseDown: (event) => event.preventDefault(),
        onPointerDown: (event) => {
          onStep(event, false);
        },
        onPointerUp: onStepDone,
        onPointerLeave: onStepDone,
        children: (0, import_jsx_runtime247.jsx)(NumberInputChevron, { direction: "down" })
      }
    )
  ] });
  return (0, import_jsx_runtime247.jsx)(
    InputBase,
    {
      component: NumericFormat,
      allowNegative,
      className: clsx_default(classes59.root, className),
      size: size4,
      ...others,
      readOnly,
      disabled,
      value: _value,
      getInputRef: useMergedRef(ref, inputRef),
      onValueChange: handleValueChange,
      rightSection: hideControls || readOnly ? rightSection : rightSection || controls,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      __staticSelector: "NumberInput",
      decimalScale: allowDecimal ? decimalScale : 0,
      onKeyDown: handleKeyDown,
      onKeyDownCapture: handleKeyDownCapture,
      rightSectionPointerEvents: rightSectionPointerEvents ?? (disabled ? "none" : void 0),
      rightSectionWidth: rightSectionWidth ?? `var(--ni-right-section-width-${size4 || "sm"})`,
      allowLeadingZeros,
      onBlur: (event) => {
        onBlur == null ? void 0 : onBlur(event);
        if (clampBehavior === "blur" && typeof _value === "number") {
          const clampedValue = clamp(_value, min2, max2);
          if (clampedValue !== _value) {
            setValue(clamp(_value, min2, max2));
          }
        }
        if (trimLeadingZeroesOnBlur && typeof _value === "string") {
          const replaced = _value.replace(/^0+/, "");
          const parsedValue = parseFloat(replaced);
          setValue(
            Number.isNaN(parsedValue) || parsedValue > Number.MAX_SAFE_INTEGER ? replaced : parsedValue
          );
        }
      },
      isAllowed: (val) => {
        if (clampBehavior === "strict") {
          if (isAllowed) {
            return isAllowed(val) && isInRange(val.floatValue, min2, max2);
          }
          return isInRange(val.floatValue, min2, max2);
        }
        return isAllowed ? isAllowed(val) : true;
      }
    }
  );
});
NumberInput.classes = { ...InputBase.classes, ...classes59 };
NumberInput.displayName = "@mantine/core/NumberInput";

// node_modules/@mantine/core/esm/components/Pagination/Pagination.mjs
var import_jsx_runtime255 = __toESM(require_jsx_runtime(), 1);
var import_react343 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Pagination/PaginationControl/PaginationControl.mjs
var import_jsx_runtime249 = __toESM(require_jsx_runtime(), 1);
var import_react339 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs
var import_react338 = __toESM(require_react(), 1);
var import_jsx_runtime248 = __toESM(require_jsx_runtime(), 1);
var [PaginationProvider, usePaginationContext] = createSafeContext(
  "Pagination.Root component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Pagination/Pagination.module.css.mjs
var classes60 = { "root": "m_4addd315", "control": "m_326d024a", "dots": "m_4ad7767d" };

// node_modules/@mantine/core/esm/components/Pagination/PaginationControl/PaginationControl.mjs
var defaultProps134 = {
  withPadding: true
};
var PaginationControl = factory((_props, ref) => {
  const props = useProps("PaginationControl", defaultProps134, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    active,
    disabled,
    withPadding,
    mod,
    ...others
  } = props;
  const ctx = usePaginationContext();
  const _disabled = disabled || ctx.disabled;
  return (0, import_jsx_runtime249.jsx)(
    UnstyledButton,
    {
      ref,
      disabled: _disabled,
      mod: [{ active, disabled: _disabled, "with-padding": withPadding }, mod],
      ...ctx.getStyles("control", { className, style, classNames, styles, active: !_disabled }),
      ...others
    }
  );
});
PaginationControl.classes = classes60;
PaginationControl.displayName = "@mantine/core/PaginationControl";

// node_modules/@mantine/core/esm/components/Pagination/PaginationDots/PaginationDots.mjs
var import_jsx_runtime251 = __toESM(require_jsx_runtime(), 1);
var import_react340 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Pagination/Pagination.icons.mjs
var import_jsx_runtime250 = __toESM(require_jsx_runtime(), 1);
function PaginationIcon({ style, children, path, ...others }) {
  return (0, import_jsx_runtime250.jsx)(
    "svg",
    {
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)",
        ...style
      },
      ...others,
      children: (0, import_jsx_runtime250.jsx)("path", { d: path, fill: "currentColor" })
    }
  );
}
var PaginationNextIcon = (props) => (0, import_jsx_runtime250.jsx)(
  PaginationIcon,
  {
    ...props,
    path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
  }
);
var PaginationPreviousIcon = (props) => (0, import_jsx_runtime250.jsx)(
  PaginationIcon,
  {
    ...props,
    path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
  }
);
var PaginationFirstIcon = (props) => (0, import_jsx_runtime250.jsx)(
  PaginationIcon,
  {
    ...props,
    path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
  }
);
var PaginationLastIcon = (props) => (0, import_jsx_runtime250.jsx)(
  PaginationIcon,
  {
    ...props,
    path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
  }
);
var PaginationDotsIcon = (props) => (0, import_jsx_runtime250.jsx)(
  PaginationIcon,
  {
    ...props,
    path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
  }
);

// node_modules/@mantine/core/esm/components/Pagination/PaginationDots/PaginationDots.mjs
var defaultProps135 = {
  icon: PaginationDotsIcon
};
var PaginationDots = factory((_props, ref) => {
  const props = useProps("PaginationDots", defaultProps135, _props);
  const { classNames, className, style, styles, vars, icon, ...others } = props;
  const ctx = usePaginationContext();
  const Icon = icon;
  return (0, import_jsx_runtime251.jsx)(Box, { ref, ...ctx.getStyles("dots", { className, style, styles, classNames }), ...others, children: (0, import_jsx_runtime251.jsx)(
    Icon,
    {
      style: {
        width: "calc(var(--pagination-control-size) / 1.8)",
        height: "calc(var(--pagination-control-size) / 1.8)"
      }
    }
  ) });
});
PaginationDots.classes = classes60;
PaginationDots.displayName = "@mantine/core/PaginationDots";

// node_modules/@mantine/core/esm/components/Pagination/PaginationEdges/PaginationEdges.mjs
var import_jsx_runtime252 = __toESM(require_jsx_runtime(), 1);
var import_react341 = __toESM(require_react(), 1);
function createEdgeComponent({ icon, name, action, type }) {
  const defaultProps180 = { icon };
  const Component = (0, import_react341.forwardRef)((props, ref) => {
    const { icon: _icon, ...others } = useProps(name, defaultProps180, props);
    const Icon = _icon;
    const ctx = usePaginationContext();
    const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
    return (0, import_jsx_runtime252.jsx)(
      PaginationControl,
      {
        disabled: ctx.disabled || disabled,
        ref,
        onClick: ctx[action],
        withPadding: false,
        ...others,
        children: (0, import_jsx_runtime252.jsx)(
          Icon,
          {
            className: "mantine-rotate-rtl",
            style: {
              width: "calc(var(--pagination-control-size) / 1.8)",
              height: "calc(var(--pagination-control-size) / 1.8)"
            }
          }
        )
      }
    );
  });
  Component.displayName = `@mantine/core/${name}`;
  return createPolymorphicComponent(Component);
}
var PaginationNext = createEdgeComponent({
  icon: PaginationNextIcon,
  name: "PaginationNext",
  action: "onNext",
  type: "next"
});
var PaginationPrevious = createEdgeComponent({
  icon: PaginationPreviousIcon,
  name: "PaginationPrevious",
  action: "onPrevious",
  type: "previous"
});
var PaginationFirst = createEdgeComponent({
  icon: PaginationFirstIcon,
  name: "PaginationFirst",
  action: "onFirst",
  type: "previous"
});
var PaginationLast = createEdgeComponent({
  icon: PaginationLastIcon,
  name: "PaginationLast",
  action: "onLast",
  type: "next"
});

// node_modules/@mantine/core/esm/components/Pagination/PaginationItems/PaginationItems.mjs
var import_jsx_runtime253 = __toESM(require_jsx_runtime(), 1);
function PaginationItems({ dotsIcon }) {
  const ctx = usePaginationContext();
  const items = ctx.range.map((page, index5) => {
    var _a;
    if (page === "dots") {
      return (0, import_jsx_runtime253.jsx)(PaginationDots, { icon: dotsIcon }, index5);
    }
    return (0, import_jsx_runtime253.jsx)(
      PaginationControl,
      {
        active: page === ctx.active,
        "aria-current": page === ctx.active ? "page" : void 0,
        onClick: () => ctx.onChange(page),
        disabled: ctx.disabled,
        ...(_a = ctx.getItemProps) == null ? void 0 : _a.call(ctx, page),
        children: page
      },
      index5
    );
  });
  return (0, import_jsx_runtime253.jsx)(import_jsx_runtime253.Fragment, { children: items });
}
PaginationItems.displayName = "@mantine/core/PaginationItems";

// node_modules/@mantine/core/esm/components/Pagination/PaginationRoot/PaginationRoot.mjs
var import_jsx_runtime254 = __toESM(require_jsx_runtime(), 1);
var import_react342 = __toESM(require_react(), 1);
var defaultProps136 = {
  siblings: 1,
  boundaries: 1
};
var varsResolver60 = createVarsResolver(
  (theme, { size: size4, radius, color, autoContrast }) => ({
    root: {
      "--pagination-control-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--pagination-control-size": getSize(size4, "pagination-control-size"),
      "--pagination-control-fz": getFontSize(size4),
      "--pagination-active-bg": color ? getThemeColor(color, theme) : void 0,
      "--pagination-active-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0
    }
  })
);
var PaginationRoot = factory((_props, ref) => {
  const props = useProps("PaginationRoot", defaultProps136, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps,
    autoContrast,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Pagination",
    classes: classes60,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver60
  });
  const { range: range3, setPage, next, previous, active, first, last } = usePagination({
    page: value,
    initialPage: defaultValue,
    onChange,
    total,
    siblings,
    boundaries
  });
  const handleNextPage = createEventHandler(onNextPage, next);
  const handlePreviousPage = createEventHandler(onPreviousPage, previous);
  const handleFirstPage = createEventHandler(onFirstPage, first);
  const handleLastPage = createEventHandler(onLastPage, last);
  return (0, import_jsx_runtime254.jsx)(
    PaginationProvider,
    {
      value: {
        total,
        range: range3,
        active,
        disabled,
        getItemProps,
        onChange: setPage,
        onNext: handleNextPage,
        onPrevious: handlePreviousPage,
        onFirst: handleFirstPage,
        onLast: handleLastPage,
        getStyles: getStyles2
      },
      children: (0, import_jsx_runtime254.jsx)(Box, { ref, ...getStyles2("root"), ...others })
    }
  );
});
PaginationRoot.classes = classes60;
PaginationRoot.displayName = "@mantine/core/PaginationRoot";

// node_modules/@mantine/core/esm/components/Pagination/Pagination.mjs
var defaultProps137 = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8
};
var Pagination = factory((_props, ref) => {
  const props = useProps("Pagination", defaultProps137, _props);
  const {
    withEdges,
    withControls,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    gap,
    hideWithOnePage,
    ...others
  } = props;
  if (total <= 0 || hideWithOnePage && total === 1) {
    return null;
  }
  return (0, import_jsx_runtime255.jsx)(PaginationRoot, { ref, total, ...others, children: (0, import_jsx_runtime255.jsxs)(Group, { gap, children: [
    withEdges && (0, import_jsx_runtime255.jsx)(PaginationFirst, { icon: firstIcon, ...getControlProps == null ? void 0 : getControlProps("first") }),
    withControls && (0, import_jsx_runtime255.jsx)(PaginationPrevious, { icon: previousIcon, ...getControlProps == null ? void 0 : getControlProps("previous") }),
    (0, import_jsx_runtime255.jsx)(PaginationItems, { dotsIcon }),
    withControls && (0, import_jsx_runtime255.jsx)(PaginationNext, { icon: nextIcon, ...getControlProps == null ? void 0 : getControlProps("next") }),
    withEdges && (0, import_jsx_runtime255.jsx)(PaginationLast, { icon: lastIcon, ...getControlProps == null ? void 0 : getControlProps("last") })
  ] }) });
});
Pagination.classes = classes60;
Pagination.displayName = "@mantine/core/Pagination";
Pagination.Root = PaginationRoot;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.First = PaginationFirst;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Items = PaginationItems;

// node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs
var import_jsx_runtime257 = __toESM(require_jsx_runtime(), 1);
var import_react344 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/PasswordInput/PasswordToggleIcon.mjs
var import_jsx_runtime256 = __toESM(require_jsx_runtime(), 1);
var PasswordToggleIcon = ({
  reveal
}) => (0, import_jsx_runtime256.jsx)(
  "svg",
  {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" },
    children: (0, import_jsx_runtime256.jsx)(
      "path",
      {
        d: reveal ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  }
);

// node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.module.css.mjs
var classes61 = { "root": "m_f61ca620", "input": "m_ccf8da4c", "innerInput": "m_f2d85dd2", "visibilityToggle": "m_b1072d44" };

// node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs
var defaultProps138 = {
  visibilityToggleIcon: PasswordToggleIcon
};
var varsResolver61 = createVarsResolver((_, { size: size4 }) => ({
  root: {
    "--psi-icon-size": getSize(size4, "psi-icon-size"),
    "--psi-button-size": getSize(size4, "psi-button-size")
  }
}));
var PasswordInput = factory((_props, ref) => {
  const props = useProps("PasswordInput", defaultProps138, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    required,
    error: error2,
    leftSection,
    disabled,
    id,
    variant,
    inputContainer,
    description,
    label,
    size: size4,
    errorProps,
    descriptionProps,
    labelProps,
    withAsterisk,
    inputWrapperOrder,
    wrapperProps,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionWidth,
    visible: visible2,
    defaultVisible,
    onVisibilityChange,
    visibilityToggleIcon,
    visibilityToggleButtonProps,
    rightSectionProps,
    leftSectionProps,
    leftSectionPointerEvents,
    withErrorStyles,
    mod,
    ...others
  } = props;
  const uuid = useId(id);
  const [_visible, setVisibility] = useUncontrolled({
    value: visible2,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange
  });
  const toggleVisibility = () => setVisibility(!_visible);
  const getStyles2 = useStyles({
    name: "PasswordInput",
    classes: classes61,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver61
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const { styleProps, rest } = extractStyleProps(others);
  const VisibilityToggleIcon = visibilityToggleIcon;
  const visibilityToggleButton = (0, import_jsx_runtime257.jsx)(
    ActionIcon,
    {
      ...getStyles2("visibilityToggle"),
      disabled,
      radius,
      "aria-hidden": !visibilityToggleButtonProps,
      tabIndex: -1,
      ...visibilityToggleButtonProps,
      variant: "subtle",
      color: "gray",
      unstyled,
      onMouseDown: (event) => {
        var _a;
        event.preventDefault();
        (_a = visibilityToggleButtonProps == null ? void 0 : visibilityToggleButtonProps.onMouseDown) == null ? void 0 : _a.call(visibilityToggleButtonProps, event);
        toggleVisibility();
      },
      onKeyDown: (event) => {
        var _a;
        (_a = visibilityToggleButtonProps == null ? void 0 : visibilityToggleButtonProps.onKeyDown) == null ? void 0 : _a.call(visibilityToggleButtonProps, event);
        if (event.key === " ") {
          event.preventDefault();
          toggleVisibility();
        }
      },
      children: (0, import_jsx_runtime257.jsx)(VisibilityToggleIcon, { reveal: _visible })
    }
  );
  return (0, import_jsx_runtime257.jsx)(
    Input.Wrapper,
    {
      required,
      id: uuid,
      label,
      error: error2,
      description,
      size: size4,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: "PasswordInput",
      errorProps,
      descriptionProps,
      unstyled,
      withAsterisk,
      inputWrapperOrder,
      inputContainer,
      variant,
      labelProps: { ...labelProps, htmlFor: uuid },
      mod,
      ...getStyles2("root"),
      ...styleProps,
      ...wrapperProps,
      children: (0, import_jsx_runtime257.jsx)(
        Input,
        {
          component: "div",
          error: error2,
          leftSection,
          size: size4,
          classNames: { ...resolvedClassNames, input: clsx_default(classes61.input, resolvedClassNames.input) },
          styles: resolvedStyles,
          radius,
          disabled,
          __staticSelector: "PasswordInput",
          rightSectionWidth,
          rightSection: rightSection ?? visibilityToggleButton,
          variant,
          unstyled,
          leftSectionWidth,
          rightSectionPointerEvents: rightSectionPointerEvents || "all",
          rightSectionProps,
          leftSectionProps,
          leftSectionPointerEvents,
          withAria: false,
          withErrorStyles,
          children: (0, import_jsx_runtime257.jsx)(
            "input",
            {
              required,
              "data-invalid": !!error2 || void 0,
              "data-with-left-section": !!leftSection || void 0,
              ...getStyles2("innerInput"),
              disabled,
              id: uuid,
              ref,
              ...rest,
              autoComplete: rest.autoComplete || "off",
              type: _visible ? "text" : "password"
            }
          )
        }
      )
    }
  );
});
PasswordInput.classes = { ...InputBase.classes, ...classes61 };
PasswordInput.displayName = "@mantine/core/PasswordInput";

// node_modules/@mantine/core/esm/components/PinInput/PinInput.mjs
var import_jsx_runtime258 = __toESM(require_jsx_runtime(), 1);
var import_react345 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/PinInput/create-pin-array/create-pin-array.mjs
function createPinArray(length, value) {
  if (length < 1) {
    return [];
  }
  const values2 = new Array(length).fill("");
  if (value) {
    const splitted = value.trim().split("");
    for (let i = 0; i < Math.min(length, splitted.length); i += 1) {
      values2[i] = splitted[i] === " " ? "" : splitted[i];
    }
  }
  return values2;
}

// node_modules/@mantine/core/esm/components/PinInput/PinInput.module.css.mjs
var classes62 = { "root": "m_f1cb205a", "pinInput": "m_cb288ead" };

// node_modules/@mantine/core/esm/components/PinInput/PinInput.mjs
var regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i
};
var defaultProps139 = {
  gap: "sm",
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: "○",
  type: "alphanumeric",
  ariaLabel: "PinInput"
};
var varsResolver62 = createVarsResolver((_, { size: size4 }) => ({
  root: {
    "--pin-input-size": getSize(size4 ?? defaultProps139.size, "pin-input-size")
  }
}));
var PinInput = factory((props, ref) => {
  const {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size: size4,
    classNames,
    styles,
    unstyled,
    length,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error: error2,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars,
    id,
    hiddenInputProps,
    rootRef,
    ...others
  } = useProps("PinInput", defaultProps139, props);
  const uuid = useId(id);
  const getStyles2 = useStyles({
    name: "PinInput",
    classes: classes62,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver62
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [focusedIndex, setFocusedIndex] = (0, import_react345.useState)(-1);
  const [_value, setValues] = useUncontrolled({
    value: value ? createPinArray(length ?? 0, value) : void 0,
    defaultValue: defaultValue == null ? void 0 : defaultValue.split("").slice(0, length ?? 0),
    finalValue: createPinArray(length ?? 0, ""),
    onChange: typeof onChange === "function" ? (val) => {
      onChange(val.join("").trim());
    } : void 0
  });
  const _valueToString = _value.join("").trim();
  const inputsRef = (0, import_react345.useRef)([]);
  const validate = (code) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re == null ? void 0 : re.test(code);
  };
  const focusInputField = (dir, index5, event) => {
    if (!manageFocus) {
      event == null ? void 0 : event.preventDefault();
      return;
    }
    if (dir === "next") {
      const nextIndex = index5 + 1;
      const canFocusNext = nextIndex < (length ?? 0);
      if (canFocusNext) {
        event == null ? void 0 : event.preventDefault();
        inputsRef.current[nextIndex].focus();
      }
    }
    if (dir === "prev") {
      const nextIndex = index5 - 1;
      const canFocusNext = nextIndex > -1;
      if (canFocusNext) {
        event == null ? void 0 : event.preventDefault();
        inputsRef.current[nextIndex].focus();
      }
    }
  };
  const setFieldValue = (val, index5) => {
    const values2 = [..._value];
    values2[index5] = val;
    setValues(values2);
  };
  const handleChange = (event, index5) => {
    const inputValue = event.target.value;
    const nextCharOrValue = inputValue.length === 2 ? inputValue.split("")[inputValue.length - 1] : inputValue;
    const isValid = validate(nextCharOrValue);
    if (nextCharOrValue.length < 2) {
      if (isValid) {
        setFieldValue(nextCharOrValue, index5);
        focusInputField("next", index5);
      } else {
        setFieldValue("", index5);
      }
    } else if (isValid) {
      setValues(createPinArray(length ?? 0, inputValue));
    }
  };
  const handleKeyDown = (event, index5) => {
    const { ctrlKey, metaKey, key, shiftKey, target } = event;
    const inputValue = target.value;
    if (inputMode === "numeric") {
      const canTypeSign = key === "Backspace" || key === "Tab" || key === "Control" || key === "Delete" || ctrlKey && key === "v" || metaKey && key === "v" ? true : !Number.isNaN(Number(key));
      if (!canTypeSign) {
        event.preventDefault();
      }
    }
    if (key === "ArrowLeft" || shiftKey && key === "Tab") {
      focusInputField("prev", index5, event);
    } else if (key === "ArrowRight" || key === "Tab" || key === " ") {
      focusInputField("next", index5, event);
    } else if (key === "Delete") {
      setFieldValue("", index5);
    } else if (key === "Backspace") {
      setFieldValue("", index5);
      if (length === index5 + 1) {
        if (event.target.value === "") {
          focusInputField("prev", index5, event);
        }
      } else {
        focusInputField("prev", index5, event);
      }
    } else if (inputValue.length > 0 && key === _value[index5]) {
      focusInputField("next", index5, event);
    }
  };
  const handleFocus = (event, index5) => {
    event.target.select();
    setFocusedIndex(index5);
  };
  const handleBlur = () => {
    setFocusedIndex(-1);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const copyValue = event.clipboardData.getData("text/plain").replace(/[\n\r\s]+/g, "");
    const isValid = validate(copyValue.trim());
    if (isValid) {
      const copyValueToPinArray = createPinArray(length ?? 0, copyValue);
      setValues(copyValueToPinArray);
      focusInputField("next", copyValueToPinArray.length - 2);
    }
  };
  (0, import_react345.useEffect)(() => {
    if (_valueToString.length !== length)
      return;
    onComplete == null ? void 0 : onComplete(_valueToString);
  }, [length, _valueToString]);
  (0, import_react345.useEffect)(() => {
    if (length !== _value.length) {
      setValues(createPinArray(length ?? 0, _value.join("")));
    }
  }, [length, _value]);
  (0, import_react345.useEffect)(() => {
    if (value === "") {
      setValues(createPinArray(length ?? 0, value));
    }
  }, [value]);
  (0, import_react345.useEffect)(() => {
    if (disabled) {
      setFocusedIndex(-1);
    }
  }, [disabled]);
  return (0, import_jsx_runtime258.jsxs)(import_jsx_runtime258.Fragment, { children: [
    (0, import_jsx_runtime258.jsx)(
      Group,
      {
        ...others,
        ...getStyles2("root"),
        ref: rootRef,
        role: "group",
        id: uuid,
        gap,
        unstyled,
        wrap: "nowrap",
        variant,
        __size: size4,
        dir: "ltr",
        children: _value.map((char, index5) => (0, import_react345.createElement)(
          Input,
          {
            component: "input",
            ...getStyles2("pinInput", {
              style: {
                "--input-padding": "0",
                "--input-text-align": "center"
              }
            }),
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            size: size4,
            __staticSelector: "PinInput",
            id: `${uuid}-${index5 + 1}`,
            key: `${uuid}-${index5}`,
            inputMode: inputMode || (type === "number" ? "numeric" : "text"),
            onChange: (event) => handleChange(event, index5),
            onKeyDown: (event) => handleKeyDown(event, index5),
            onFocus: (event) => handleFocus(event, index5),
            onBlur: handleBlur,
            onPaste: handlePaste,
            type: inputType || (mask ? "password" : type === "number" ? "tel" : "text"),
            radius,
            error: error2,
            variant,
            disabled,
            ref: (node) => {
              index5 === 0 && assignRef2(ref, node);
              inputsRef.current[index5] = node;
            },
            autoComplete: oneTimeCode ? "one-time-code" : "off",
            placeholder: focusedIndex === index5 ? "" : placeholder,
            value: char,
            autoFocus: autoFocus && index5 === 0,
            unstyled,
            "aria-label": ariaLabel,
            readOnly
          }
        ))
      }
    ),
    (0, import_jsx_runtime258.jsx)("input", { type: "hidden", name, form, value: _valueToString, ...hiddenInputProps })
  ] });
});
PinInput.classes = { ...classes62, ...InputBase.classes };
PinInput.displayName = "@mantine/core/PinInput";

// node_modules/@mantine/core/esm/components/Progress/Progress.mjs
var import_jsx_runtime263 = __toESM(require_jsx_runtime(), 1);
var import_react350 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Progress/ProgressLabel/ProgressLabel.mjs
var import_jsx_runtime260 = __toESM(require_jsx_runtime(), 1);
var import_react347 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Progress/Progress.context.mjs
var import_react346 = __toESM(require_react(), 1);
var import_jsx_runtime259 = __toESM(require_jsx_runtime(), 1);
var [ProgressProvider, useProgressContext] = createSafeContext(
  "Progress.Root component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Progress/Progress.module.css.mjs
var classes63 = { "root": "m_db6d6462", "section": "m_2242eb65", "stripes-animation": "m_81a374bd", "label": "m_91e40b74" };

// node_modules/@mantine/core/esm/components/Progress/ProgressLabel/ProgressLabel.mjs
var defaultProps140 = {};
var ProgressLabel = factory((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    "ProgressLabel",
    defaultProps140,
    props
  );
  const ctx = useProgressContext();
  return (0, import_jsx_runtime260.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("label", { className, style, classNames, styles }),
      ...others
    }
  );
});
ProgressLabel.classes = classes63;
ProgressLabel.displayName = "@mantine/core/ProgressLabel";

// node_modules/@mantine/core/esm/components/Progress/ProgressRoot/ProgressRoot.mjs
var import_jsx_runtime261 = __toESM(require_jsx_runtime(), 1);
var import_react348 = __toESM(require_react(), 1);
var defaultProps141 = {};
var varsResolver63 = createVarsResolver(
  (_, { size: size4, radius, transitionDuration }) => ({
    root: {
      "--progress-size": getSize(size4, "progress-size"),
      "--progress-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--progress-transition-duration": typeof transitionDuration === "number" ? `${transitionDuration}ms` : void 0
    }
  })
);
var ProgressRoot = factory((_props, ref) => {
  const props = useProps("ProgressRoot", defaultProps141, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    autoContrast,
    transitionDuration,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Progress",
    classes: classes63,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver63
  });
  return (0, import_jsx_runtime261.jsx)(ProgressProvider, { value: { getStyles: getStyles2, autoContrast }, children: (0, import_jsx_runtime261.jsx)(Box, { ref, ...getStyles2("root"), ...others }) });
});
ProgressRoot.classes = classes63;
ProgressRoot.displayName = "@mantine/core/ProgressRoot";

// node_modules/@mantine/core/esm/components/Progress/ProgressSection/ProgressSection.mjs
var import_jsx_runtime262 = __toESM(require_jsx_runtime(), 1);
var import_react349 = __toESM(require_react(), 1);
var defaultProps142 = {
  withAria: true
};
var ProgressSection = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    withAria,
    color,
    striped,
    animated,
    mod,
    ...others
  } = useProps("ProgressSection", defaultProps142, props);
  const ctx = useProgressContext();
  const theme = useMantineTheme();
  const ariaAttributes = withAria ? {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-valuetext": `${value}%`
  } : {};
  return (0, import_jsx_runtime262.jsx)(
    Box,
    {
      ref,
      ...ctx.getStyles("section", { className, classNames, styles, style }),
      ...others,
      ...ariaAttributes,
      mod: [{ striped: striped || animated, animated }, mod],
      __vars: {
        "--progress-section-width": `${value}%`,
        "--progress-section-color": getThemeColor(color, theme),
        "--progress-label-color": getAutoContrastValue(ctx.autoContrast, theme) ? getContrastColor({ color, theme, autoContrast: ctx.autoContrast }) : void 0
      }
    }
  );
});
ProgressSection.classes = classes63;
ProgressSection.displayName = "@mantine/core/ProgressSection";

// node_modules/@mantine/core/esm/components/Progress/Progress.mjs
var defaultProps143 = {};
var Progress = factory((_props, ref) => {
  const props = useProps("Progress", defaultProps143, _props);
  const {
    value,
    classNames,
    styles,
    vars,
    color,
    striped,
    animated,
    "aria-label": label,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return (0, import_jsx_runtime263.jsx)(
    ProgressRoot,
    {
      ref,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      vars,
      ...others,
      children: (0, import_jsx_runtime263.jsx)(
        ProgressSection,
        {
          value,
          color,
          striped,
          animated,
          "aria-label": label
        }
      )
    }
  );
});
Progress.classes = classes63;
Progress.displayName = "@mantine/core/Progress";
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;

// node_modules/@mantine/core/esm/components/Radio/Radio.mjs
var import_jsx_runtime270 = __toESM(require_jsx_runtime(), 1);
var import_react357 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Radio/RadioCard/RadioCard.mjs
var import_jsx_runtime266 = __toESM(require_jsx_runtime(), 1);
var import_react353 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Radio/RadioGroup.context.mjs
var import_react351 = __toESM(require_react(), 1);
var import_jsx_runtime264 = __toESM(require_jsx_runtime(), 1);
var [RadioGroupProvider, useRadioGroupContext] = createOptionalContext();

// node_modules/@mantine/core/esm/components/Radio/RadioCard/RadioCard.context.mjs
var import_react352 = __toESM(require_react(), 1);
var import_jsx_runtime265 = __toESM(require_jsx_runtime(), 1);
var [RadioCardProvider, useRadioCardContext] = createOptionalContext();

// node_modules/@mantine/core/esm/components/Radio/RadioCard/RadioCard.module.css.mjs
var classes64 = { "card": "m_9dc8ae12" };

// node_modules/@mantine/core/esm/components/Radio/RadioCard/RadioCard.mjs
var defaultProps144 = {
  withBorder: true
};
var varsResolver64 = createVarsResolver((_, { radius }) => ({
  card: {
    "--card-radius": getRadius(radius)
  }
}));
var RadioCard = factory((_props, ref) => {
  const props = useProps("RadioCard", defaultProps144, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    checked,
    mod,
    withBorder,
    value,
    onClick,
    name,
    onKeyDown,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "RadioCard",
    classes: classes64,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver64,
    rootSelector: "card"
  });
  const { dir } = useDirection();
  const ctx = useRadioGroupContext();
  const _checked = typeof checked === "boolean" ? checked : (ctx == null ? void 0 : ctx.value) === value || false;
  const _name = name || (ctx == null ? void 0 : ctx.name);
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.nativeEvent.code)) {
      event.preventDefault();
      const siblings = Array.from(
        document.querySelectorAll(
          `[role="radio"][name="${_name || "__mantine"}"]`
        )
      );
      const currentIndex = siblings.findIndex((element) => element === event.target);
      const nextIndex = currentIndex + 1 >= siblings.length ? 0 : currentIndex + 1;
      const prevIndex = currentIndex - 1 < 0 ? siblings.length - 1 : currentIndex - 1;
      if (event.nativeEvent.code === "ArrowDown") {
        siblings[nextIndex].focus();
        siblings[nextIndex].click();
      }
      if (event.nativeEvent.code === "ArrowUp") {
        siblings[prevIndex].focus();
        siblings[prevIndex].click();
      }
      if (event.nativeEvent.code === "ArrowLeft") {
        siblings[dir === "ltr" ? prevIndex : nextIndex].focus();
        siblings[dir === "ltr" ? prevIndex : nextIndex].click();
      }
      if (event.nativeEvent.code === "ArrowRight") {
        siblings[dir === "ltr" ? nextIndex : prevIndex].focus();
        siblings[dir === "ltr" ? nextIndex : prevIndex].click();
      }
    }
  };
  return (0, import_jsx_runtime266.jsx)(RadioCardProvider, { value: { checked: _checked }, children: (0, import_jsx_runtime266.jsx)(
    UnstyledButton,
    {
      ref,
      mod: [{ "with-border": withBorder, checked: _checked }, mod],
      ...getStyles2("card"),
      ...others,
      role: "radio",
      "aria-checked": _checked,
      name: _name,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx == null ? void 0 : ctx.onChange(value || "");
      },
      onKeyDown: handleKeyDown
    }
  ) });
});
RadioCard.displayName = "@mantine/core/RadioCard";
RadioCard.classes = classes64;

// node_modules/@mantine/core/esm/components/Radio/RadioGroup/RadioGroup.mjs
var import_jsx_runtime267 = __toESM(require_jsx_runtime(), 1);
var import_react354 = __toESM(require_react(), 1);
var defaultProps145 = {};
var RadioGroup = factory((props, ref) => {
  const { value, defaultValue, onChange, size: size4, wrapperProps, children, name, readOnly, ...others } = useProps("RadioGroup", defaultProps145, props);
  const _name = useId(name);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const handleChange = (event) => !readOnly && setValue(typeof event === "string" ? event : event.currentTarget.value);
  return (0, import_jsx_runtime267.jsx)(RadioGroupProvider, { value: { value: _value, onChange: handleChange, size: size4, name: _name }, children: (0, import_jsx_runtime267.jsx)(
    Input.Wrapper,
    {
      size: size4,
      ref,
      ...wrapperProps,
      ...others,
      labelElement: "div",
      __staticSelector: "RadioGroup",
      children: (0, import_jsx_runtime267.jsx)(InputsGroupFieldset, { role: "radiogroup", children })
    }
  ) });
});
RadioGroup.classes = Input.Wrapper.classes;
RadioGroup.displayName = "@mantine/core/RadioGroup";

// node_modules/@mantine/core/esm/components/Radio/RadioIcon.mjs
var import_jsx_runtime268 = __toESM(require_jsx_runtime(), 1);
var import_react355 = __toESM(require_react(), 1);
function RadioIcon({ size: size4, style, ...others }) {
  return (0, import_jsx_runtime268.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 5 5",
      style: { width: rem(size4), height: rem(size4), ...style },
      "aria-hidden": true,
      ...others,
      children: (0, import_jsx_runtime268.jsx)("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "currentColor" })
    }
  );
}

// node_modules/@mantine/core/esm/components/Radio/RadioIndicator/RadioIndicator.mjs
var import_jsx_runtime269 = __toESM(require_jsx_runtime(), 1);
var import_react356 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Radio/RadioIndicator/RadioIndicator.module.css.mjs
var classes65 = { "indicator": "m_717d7ff6", "icon": "m_3e4da632", "indicator--outline": "m_2980836c" };

// node_modules/@mantine/core/esm/components/Radio/RadioIndicator/RadioIndicator.mjs
var defaultProps146 = {
  icon: RadioIcon
};
var varsResolver65 = createVarsResolver(
  (theme, { radius, color, size: size4, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor = parsedColor.isThemeColor && parsedColor.shade === void 0 ? `var(--mantine-color-${parsedColor.color}-outline)` : parsedColor.color;
    return {
      indicator: {
        "--radio-size": getSize(size4, "radio-size"),
        "--radio-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--radio-color": variant === "outline" ? outlineColor : getThemeColor(color, theme),
        "--radio-icon-size": getSize(size4, "radio-icon-size"),
        "--radio-icon-color": iconColor ? getThemeColor(iconColor, theme) : getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0
      }
    };
  }
);
var RadioIndicator = factory((_props, ref) => {
  const props = useProps("RadioIndicator", defaultProps146, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    icon,
    radius,
    color,
    iconColor,
    autoContrast,
    checked,
    mod,
    variant,
    disabled,
    ...others
  } = props;
  const Icon = icon;
  const getStyles2 = useStyles({
    name: "RadioIndicator",
    classes: classes65,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver65,
    rootSelector: "indicator"
  });
  const ctx = useRadioCardContext();
  const _checked = typeof checked === "boolean" ? checked : (ctx == null ? void 0 : ctx.checked) || false;
  return (0, import_jsx_runtime269.jsx)(
    Box,
    {
      ref,
      ...getStyles2("indicator", { variant }),
      variant,
      mod: [{ checked: _checked, disabled }, mod],
      ...others,
      children: (0, import_jsx_runtime269.jsx)(Icon, { ...getStyles2("icon") })
    }
  );
});
RadioIndicator.displayName = "@mantine/core/RadioIndicator";
RadioIndicator.classes = classes65;

// node_modules/@mantine/core/esm/components/Radio/Radio.module.css.mjs
var classes66 = { "root": "m_f3f1af94", "inner": "m_89c4f5e4", "icon": "m_f3ed6b2b", "radio": "m_8a3dbb89", "radio--outline": "m_1bfe9d39" };

// node_modules/@mantine/core/esm/components/Radio/Radio.mjs
var defaultProps147 = {
  labelPosition: "right"
};
var varsResolver66 = createVarsResolver(
  (theme, { size: size4, radius, color, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor = parsedColor.isThemeColor && parsedColor.shade === void 0 ? `var(--mantine-color-${parsedColor.color}-outline)` : parsedColor.color;
    return {
      root: {
        "--radio-size": getSize(size4, "radio-size"),
        "--radio-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--radio-color": variant === "outline" ? outlineColor : getThemeColor(color, theme),
        "--radio-icon-color": iconColor ? getThemeColor(iconColor, theme) : getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0,
        "--radio-icon-size": getSize(size4, "radio-icon-size")
      }
    };
  }
);
var Radio = factory((_props, ref) => {
  const props = useProps("Radio", defaultProps147, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    size: size4,
    label,
    labelPosition,
    description,
    error: error2,
    radius,
    color,
    variant,
    disabled,
    wrapperProps,
    icon: Icon = RadioIcon,
    rootRef,
    iconColor,
    onChange,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Radio",
    classes: classes66,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver66
  });
  const ctx = useRadioGroupContext();
  const contextSize = (ctx == null ? void 0 : ctx.size) ?? size4;
  const componentSize = props.size ? size4 : contextSize;
  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value === rest.value,
    name: rest.name ?? ctx.name,
    onChange: (event) => {
      ctx.onChange(event);
      onChange == null ? void 0 : onChange(event);
    }
  } : {};
  return (0, import_jsx_runtime270.jsx)(
    InlineInput,
    {
      ...getStyles2("root"),
      __staticSelector: "Radio",
      __stylesApiProps: props,
      id: uuid,
      size: componentSize,
      labelPosition,
      label,
      description,
      error: error2,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant,
      ref: rootRef,
      mod,
      ...styleProps,
      ...wrapperProps,
      children: (0, import_jsx_runtime270.jsxs)(Box, { ...getStyles2("inner"), mod: { "label-position": labelPosition }, children: [
        (0, import_jsx_runtime270.jsx)(
          Box,
          {
            ...getStyles2("radio", { focusable: true, variant }),
            onChange,
            ...rest,
            ...contextProps,
            component: "input",
            mod: { error: !!error2 },
            ref,
            id: uuid,
            disabled,
            type: "radio"
          }
        ),
        (0, import_jsx_runtime270.jsx)(Icon, { ...getStyles2("icon"), "aria-hidden": true })
      ] })
    }
  );
});
Radio.classes = classes66;
Radio.displayName = "@mantine/core/Radio";
Radio.Group = RadioGroup;
Radio.Card = RadioCard;
Radio.Indicator = RadioIndicator;

// node_modules/@mantine/core/esm/components/Rating/Rating.mjs
var import_jsx_runtime275 = __toESM(require_jsx_runtime(), 1);
var import_react360 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Rating/Rating.context.mjs
var import_react358 = __toESM(require_react(), 1);
var import_jsx_runtime271 = __toESM(require_jsx_runtime(), 1);
var [RatingProvider, useRatingContext] = createSafeContext(
  "Rating was not found in tree"
);

// node_modules/@mantine/core/esm/components/Rating/RatingItem/RatingItem.mjs
var import_jsx_runtime274 = __toESM(require_jsx_runtime(), 1);
var import_react359 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Rating/StarSymbol/StarSymbol.mjs
var import_jsx_runtime273 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/core/esm/components/Rating/StarSymbol/StarIcon.mjs
var import_jsx_runtime272 = __toESM(require_jsx_runtime(), 1);
function StarIcon(props) {
  const { width, height, style, ...others } = props;
  return (0, import_jsx_runtime272.jsx)(
    "svg",
    {
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { width, height, ...style },
      ...others,
      children: (0, import_jsx_runtime272.jsx)("path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" })
    }
  );
}
StarIcon.displayName = "@mantine/core/StarIcon";

// node_modules/@mantine/core/esm/components/Rating/StarSymbol/StarSymbol.mjs
function StarSymbol({ type }) {
  const ctx = useRatingContext();
  return (0, import_jsx_runtime273.jsx)(StarIcon, { ...ctx.getStyles("starSymbol"), "data-filled": type === "full" || void 0 });
}
StarSymbol.displayName = "@mantine/core/StarSymbol";

// node_modules/@mantine/core/esm/components/Rating/RatingItem/RatingItem.mjs
function RatingItem({
  getSymbolLabel,
  emptyIcon,
  fullIcon,
  full,
  active,
  value,
  readOnly,
  fractionValue,
  color,
  id,
  onBlur,
  onChange,
  onInputChange,
  style,
  ...others
}) {
  var _a;
  const ctx = useRatingContext();
  const _fullIcon = typeof fullIcon === "function" ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === "function" ? emptyIcon(value) : emptyIcon;
  const { dir } = useDirection();
  return (0, import_jsx_runtime274.jsxs)(import_jsx_runtime274.Fragment, { children: [
    !readOnly && (0, import_jsx_runtime274.jsx)(
      "input",
      {
        ...ctx.getStyles("input"),
        onKeyDown: (event) => event.key === " " && onChange(value),
        id,
        type: "radio",
        "data-active": active || void 0,
        "aria-label": getSymbolLabel == null ? void 0 : getSymbolLabel(value),
        value,
        onBlur,
        onChange: onInputChange,
        ...others
      }
    ),
    (0, import_jsx_runtime274.jsx)(
      Box,
      {
        component: readOnly ? "div" : "label",
        ...ctx.getStyles("label"),
        "data-read-only": readOnly || void 0,
        htmlFor: id,
        onClick: () => onChange(value),
        __vars: {
          "--rating-item-z-index": (_a = fractionValue === 1 ? void 0 : active ? 2 : 0) == null ? void 0 : _a.toString()
        },
        children: (0, import_jsx_runtime274.jsx)(
          Box,
          {
            ...ctx.getStyles("symbolBody"),
            __vars: {
              "--rating-symbol-clip-path": fractionValue === 1 ? void 0 : dir === "ltr" ? `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)` : `inset(0 0 0 ${active ? 100 - fractionValue * 100 : 100}% )`
            },
            children: full ? _fullIcon || (0, import_jsx_runtime274.jsx)(StarSymbol, { type: "full" }) : _emptyIcon || (0, import_jsx_runtime274.jsx)(StarSymbol, { type: "empty" })
          }
        )
      }
    )
  ] });
}
RatingItem.displayName = "@mantine/core/RatingItem";

// node_modules/@mantine/core/esm/components/Rating/Rating.module.css.mjs
var classes67 = { "root": "m_f8d312f2", "symbolGroup": "m_61734bb7", "starSymbol": "m_5662a89a", "input": "m_211007ba", "label": "m_21342ee4", "symbolBody": "m_fae05d6a" };

// node_modules/@mantine/core/esm/components/Rating/Rating.mjs
function roundValueTo(value, to) {
  var _a;
  const rounded = Math.round(value / to) * to;
  const precision = ((_a = `${to}`.split(".")[1]) == null ? void 0 : _a.length) || 0;
  return Number(rounded.toFixed(precision));
}
var defaultProps148 = {
  size: "sm",
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: "yellow"
};
var varsResolver67 = createVarsResolver((theme, { size: size4, color }) => ({
  root: {
    "--rating-size": getSize(size4, "rating-size"),
    "--rating-color": getThemeColor(color, theme)
  }
}));
var Rating = factory((_props, ref) => {
  const props = useProps("Rating", defaultProps148, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    name,
    id,
    value,
    defaultValue,
    onChange,
    fractions,
    count: count2,
    onMouseEnter,
    readOnly,
    onMouseMove,
    onHover,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    size: size4,
    variant,
    getSymbolLabel,
    color,
    emptySymbol,
    fullSymbol,
    highlightSelectedOnly,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Rating",
    classes: classes67,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver67
  });
  const { dir } = useDirection();
  const _name = useId(name);
  const _id = useId(id);
  const rootRef = (0, import_react360.useRef)(null);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange
  });
  const [hovered, setHovered] = (0, import_react360.useState)(-1);
  const [isOutside, setOutside] = (0, import_react360.useState)(true);
  const _fractions = Math.floor(fractions);
  const _count = Math.floor(count2);
  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;
  const getRatingFromCoordinates = (x) => {
    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;
    const hoverPosition = dir === "rtl" ? right - x : x - left;
    const hoverValue = hoverPosition / symbolWidth;
    return clamp(roundValueTo(hoverValue + decimalUnit / 2, decimalUnit), decimalUnit, _count);
  };
  const handleMouseEnter = (event) => {
    onMouseEnter == null ? void 0 : onMouseEnter(event);
    !readOnly && setOutside(false);
  };
  const handleMouseMove = (event) => {
    onMouseMove == null ? void 0 : onMouseMove(event);
    if (readOnly) {
      return;
    }
    const rounded = getRatingFromCoordinates(event.clientX);
    setHovered(rounded);
    rounded !== hovered && (onHover == null ? void 0 : onHover(rounded));
  };
  const handleMouseLeave = (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    if (readOnly) {
      return;
    }
    setHovered(-1);
    setOutside(true);
    hovered !== -1 && (onHover == null ? void 0 : onHover(-1));
  };
  const handleTouchStart = (event) => {
    const { touches } = event;
    if (touches.length !== 1) {
      return;
    }
    if (!readOnly) {
      const touch = touches[0];
      setValue(getRatingFromCoordinates(touch.clientX));
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  };
  const handleTouchEnd = (event) => {
    event.preventDefault();
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  };
  const handleItemBlur = () => isOutside && setHovered(-1);
  const handleInputChange = (event) => {
    if (!readOnly) {
      if (typeof event === "number") {
        setHovered(event);
      } else {
        setHovered(parseFloat(event.target.value));
      }
    }
  };
  const handleChange = (event) => {
    if (!readOnly) {
      if (typeof event === "number") {
        setValue(event);
      } else {
        setValue(parseFloat(event.target.value));
      }
    }
  };
  const items = Array(_count).fill(0).map((_, index5) => {
    const integerValue = index5 + 1;
    const fractionItems = Array.from(new Array(index5 === 0 ? _fractions + 1 : _fractions));
    const isGroupActive = !readOnly && Math.ceil(hovered) === integerValue;
    return (0, import_jsx_runtime275.jsx)(
      "div",
      {
        "data-active": isGroupActive || void 0,
        ...getStyles2("symbolGroup"),
        children: fractionItems.map((__, fractionIndex) => {
          const fractionValue = decimalUnit * (index5 === 0 ? fractionIndex : fractionIndex + 1);
          const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);
          return (0, import_jsx_runtime275.jsx)(
            RatingItem,
            {
              getSymbolLabel,
              emptyIcon: emptySymbol,
              fullIcon: fullSymbol,
              full: highlightSelectedOnly ? symbolValue === finalValue : symbolValue <= finalValue,
              active: symbolValue === finalValue,
              checked: symbolValue === stableValueRounded,
              readOnly,
              fractionValue,
              value: symbolValue,
              name: _name,
              onChange: handleChange,
              onBlur: handleItemBlur,
              onInputChange: handleInputChange,
              id: `${_id}-${index5}-${fractionIndex}`
            },
            `${integerValue}-${symbolValue}`
          );
        })
      },
      integerValue
    );
  });
  return (0, import_jsx_runtime275.jsx)(RatingProvider, { value: { getStyles: getStyles2 }, children: (0, import_jsx_runtime275.jsx)(
    Box,
    {
      ref: useMergedRef(rootRef, ref),
      ...getStyles2("root"),
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      variant,
      size: size4,
      id: _id,
      ...others,
      children: items
    }
  ) });
});
Rating.classes = classes67;
Rating.displayName = "@mantine/core/Rating";

// node_modules/@mantine/core/esm/components/RingProgress/RingProgress.mjs
var import_jsx_runtime280 = __toESM(require_jsx_runtime(), 1);
var import_react372 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/RingProgress/Curve/Curve.mjs
var import_jsx_runtime279 = __toESM(require_jsx_runtime(), 1);
var import_react371 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs
var import_jsx_runtime278 = __toESM(require_jsx_runtime(), 1);
var import_react369 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs
var defaultTransition = {
  duration: 100,
  transition: "fade"
};
function getTransitionProps(transitionProps, componentTransition) {
  return { ...defaultTransition, ...componentTransition, ...transitionProps };
}

// node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs
var import_jsx_runtime276 = __toESM(require_jsx_runtime(), 1);
var import_react363 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs
var import_react361 = __toESM(require_react(), 1);
function useFloatingTooltip({
  offset: offset4,
  position,
  defaultOpened
}) {
  const [opened, setOpened] = (0, import_react361.useState)(defaultOpened);
  const boundaryRef = (0, import_react361.useRef)();
  const { x, y, elements, refs, update, placement } = useFloating2({
    placement: position,
    middleware: [
      shift3({
        crossAxis: true,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  });
  const horizontalOffset = placement.includes("right") ? offset4 : position.includes("left") ? offset4 * -1 : 0;
  const verticalOffset = placement.includes("bottom") ? offset4 : position.includes("top") ? offset4 * -1 : 0;
  const handleMouseMove = (0, import_react361.useCallback)(
    ({ clientX, clientY }) => {
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX + horizontalOffset,
            top: clientY + verticalOffset,
            right: clientX,
            bottom: clientY
          };
        }
      });
    },
    [elements.reference]
  );
  (0, import_react361.useEffect)(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
      boundary.addEventListener("mousemove", handleMouseMove);
      const parents = getOverflowAncestors(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener("scroll", update);
      });
      return () => {
        boundary.removeEventListener("mousemove", handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener("scroll", update);
        });
      };
    }
    return void 0;
  }, [elements.reference, refs.floating.current, update, handleMouseMove, opened]);
  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating: refs.setFloating };
}

// node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs
var classes68 = { "tooltip": "m_1b3c8819", "arrow": "m_f898399f" };

// node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs
var defaultProps149 = {
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  defaultOpened: false,
  position: "right",
  zIndex: getDefaultZIndex("popover")
};
var varsResolver68 = createVarsResolver((theme, { radius, color }) => ({
  tooltip: {
    "--tooltip-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--tooltip-bg": color ? getThemeColor(color, theme) : void 0,
    "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
  }
}));
var TooltipFloating = factory((_props, ref) => {
  const props = useProps("TooltipFloating", defaultProps149, _props);
  const {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset: offset4,
    position,
    multiline,
    zIndex,
    disabled,
    defaultOpened,
    variant,
    vars,
    portalProps,
    ...others
  } = props;
  const theme = useMantineTheme();
  const getStyles2 = useStyles({
    name: "TooltipFloating",
    props,
    classes: classes68,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver: varsResolver68
  });
  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset: offset4,
    position,
    defaultOpened
  });
  if (!isElement(children)) {
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = useMergedRef(boundaryRef, children.ref, ref);
  const onMouseEnter = (event) => {
    var _a, _b;
    (_b = (_a = children.props).onMouseEnter) == null ? void 0 : _b.call(_a, event);
    handleMouseMove(event);
    setOpened(true);
  };
  const onMouseLeave = (event) => {
    var _a, _b;
    (_b = (_a = children.props).onMouseLeave) == null ? void 0 : _b.call(_a, event);
    setOpened(false);
  };
  return (0, import_jsx_runtime276.jsxs)(import_jsx_runtime276.Fragment, { children: [
    (0, import_jsx_runtime276.jsx)(OptionalPortal, { ...portalProps, withinPortal, children: (0, import_jsx_runtime276.jsx)(
      Box,
      {
        ...others,
        ...getStyles2("tooltip", {
          style: {
            ...getStyleObject(style, theme),
            zIndex,
            display: !disabled && opened ? "block" : "none",
            top: (y && Math.round(y)) ?? "",
            left: (x && Math.round(x)) ?? ""
          }
        }),
        variant,
        ref: floating,
        mod: { multiline },
        children: label
      }
    ) }),
    (0, import_react363.cloneElement)(children, {
      ...children.props,
      [refProp]: targetRef,
      onMouseEnter,
      onMouseLeave
    })
  ] });
});
TooltipFloating.classes = classes68;
TooltipFloating.displayName = "@mantine/core/TooltipFloating";

// node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs
var import_jsx_runtime277 = __toESM(require_jsx_runtime(), 1);
var import_react366 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs
var import_react364 = __toESM(require_react(), 1);
var TooltipGroupContext = (0, import_react364.createContext)(false);
var TooltipGroupProvider = TooltipGroupContext.Provider;
var useTooltipGroupContext = () => (0, import_react364.useContext)(TooltipGroupContext);

// node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs
var defaultProps150 = {
  openDelay: 0,
  closeDelay: 0
};
function TooltipGroup(props) {
  const { openDelay, closeDelay, children } = useProps("TooltipGroup", defaultProps150, props);
  return (0, import_jsx_runtime277.jsx)(TooltipGroupProvider, { value: true, children: (0, import_jsx_runtime277.jsx)(FloatingDelayGroup, { delay: { open: openDelay, close: closeDelay }, children }) });
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";

// node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs
var import_react367 = __toESM(require_react(), 1);
function useTooltip(settings) {
  var _a, _b, _c;
  const [uncontrolledOpened, setUncontrolledOpened] = (0, import_react367.useState)(settings.defaultOpened);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = useId();
  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();
  const onChange = (0, import_react367.useCallback)(
    (_opened) => {
      setUncontrolledOpened(_opened);
      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid]
  );
  const {
    x,
    y,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = useFloating2({
    strategy: settings.strategy,
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset3(settings.offset),
      shift3({ padding: 8 }),
      flip3(),
      arrow3({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [inline3()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover2(context, {
      enabled: (_a = settings.events) == null ? void 0 : _a.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !((_b = settings.events) == null ? void 0 : _b.touch)
    }),
    useFocus(context, { enabled: (_c = settings.events) == null ? void 0 : _c.focus, visibleOnly: true }),
    useRole(context, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === "undefined" }),
    useDelayGroup(context, { id: uid })
  ]);
  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  useDidUpdate(() => {
    var _a2;
    (_a2 = settings.onPositionChange) == null ? void 0 : _a2.call(settings, placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference: refs.setReference,
    floating: refs.setFloating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}

// node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs
var defaultProps151 = {
  position: "top",
  refProp: "ref",
  withinPortal: true,
  inline: false,
  defaultOpened: false,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: true, focus: false, touch: false },
  zIndex: getDefaultZIndex("popover"),
  positionDependencies: []
};
var varsResolver69 = createVarsResolver((theme, { radius, color }) => ({
  tooltip: {
    "--tooltip-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--tooltip-bg": color ? getThemeColor(color, theme) : void 0,
    "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
  }
}));
var Tooltip = factory((_props, ref) => {
  const props = useProps("Tooltip", defaultProps151, _props);
  const {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    defaultOpened,
    withinPortal,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    offset: offset4,
    transitionProps,
    multiline,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline: inline4,
    variant,
    keepMounted,
    vars,
    portalProps,
    mod,
    floatingStrategy,
    ...others
  } = useProps("Tooltip", defaultProps151, props);
  const { dir } = useDirection();
  const arrowRef = (0, import_react369.useRef)(null);
  const tooltip = useTooltip({
    position: getFloatingPosition(dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    defaultOpened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset4 === "number" ? offset4 + (withArrow ? arrowSize / 2 : 0) : offset4,
    positionDependencies: [...positionDependencies, children],
    inline: inline4,
    strategy: floatingStrategy
  });
  const getStyles2 = useStyles({
    name: "Tooltip",
    props,
    classes: classes68,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "tooltip",
    vars,
    varsResolver: varsResolver69
  });
  if (!isElement(children)) {
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const targetRef = useMergedRef(tooltip.reference, children.ref, ref);
  const transition = getTransitionProps(transitionProps, { duration: 100, transition: "fade" });
  return (0, import_jsx_runtime278.jsxs)(import_jsx_runtime278.Fragment, { children: [
    (0, import_jsx_runtime278.jsx)(OptionalPortal, { ...portalProps, withinPortal, children: (0, import_jsx_runtime278.jsx)(
      Transition,
      {
        ...transition,
        keepMounted,
        mounted: !disabled && !!tooltip.opened,
        duration: tooltip.isGroupPhase ? 10 : transition.duration,
        children: (transitionStyles) => (0, import_jsx_runtime278.jsxs)(
          Box,
          {
            ...others,
            variant,
            mod: [{ multiline }, mod],
            ...tooltip.getFloatingProps({
              ref: tooltip.floating,
              className: getStyles2("tooltip").className,
              style: {
                ...getStyles2("tooltip").style,
                ...transitionStyles,
                zIndex,
                top: tooltip.y ?? 0,
                left: tooltip.x ?? 0
              }
            }),
            children: [
              label,
              (0, import_jsx_runtime278.jsx)(
                FloatingArrow3,
                {
                  ref: arrowRef,
                  arrowX: tooltip.arrowX,
                  arrowY: tooltip.arrowY,
                  visible: withArrow,
                  position: tooltip.placement,
                  arrowSize,
                  arrowOffset,
                  arrowRadius,
                  arrowPosition,
                  ...getStyles2("arrow")
                }
              )
            ]
          }
        )
      }
    ) }),
    (0, import_react369.cloneElement)(
      children,
      tooltip.getReferenceProps({
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseMove: props.onMouseMove,
        onPointerDown: props.onPointerDown,
        onPointerEnter: props.onPointerEnter,
        [refProp]: targetRef,
        className: clsx_default(className, children.props.className),
        ...children.props
      })
    )
  ] });
});
Tooltip.classes = classes68;
Tooltip.displayName = "@mantine/core/Tooltip";
Tooltip.Floating = TooltipFloating;
Tooltip.Group = TooltipGroup;

// node_modules/@mantine/core/esm/components/RingProgress/Curve/get-curve-props.mjs
function getCurveProps({ size: size4, thickness, sum, value, root, offset: offset4 }) {
  const radius = (size4 * 0.9 - thickness * 2) / 2;
  const deg = Math.PI * radius * 2 / 100;
  const strokeDasharray = root || value === void 0 ? `${(100 - sum) * deg}, ${sum * deg}` : `${value * deg}, ${(100 - value) * deg}`;
  return {
    strokeWidth: Number.isNaN(thickness) ? 12 : thickness,
    cx: size4 / 2 || 0,
    cy: size4 / 2 || 0,
    r: radius || 0,
    transform: root ? `scale(1, -1) translate(0, -${size4})` : void 0,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset4 || 0
  };
}

// node_modules/@mantine/core/esm/components/RingProgress/Curve/Curve.mjs
function Curve({
  size: size4,
  value,
  offset: offset4,
  sum,
  thickness,
  root,
  color,
  lineRoundCaps,
  tooltip,
  getStyles: getStyles2,
  display,
  ...others
}) {
  const theme = useMantineTheme();
  return (0, import_jsx_runtime279.jsx)(Tooltip.Floating, { disabled: !tooltip, label: tooltip, children: (0, import_jsx_runtime279.jsx)(
    Box,
    {
      component: "circle",
      ...others,
      ...getStyles2("curve"),
      __vars: { "--curve-color": color ? getThemeColor(color, theme) : void 0 },
      fill: "none",
      strokeLinecap: lineRoundCaps ? "round" : "butt",
      ...getCurveProps({ sum, size: size4, thickness, value, offset: offset4, root })
    }
  ) });
}
Curve.displayName = "@mantine/core/Curve";

// node_modules/@mantine/core/esm/components/RingProgress/get-curves/get-curves.mjs
function getCurves({
  size: size4,
  thickness,
  sections,
  renderRoundedLineCaps,
  rootColor
}) {
  const sum = sections.reduce((acc, current) => acc + current.value, 0);
  const accumulated = Math.PI * ((size4 * 0.9 - thickness * 2) / 2) * 2;
  let offset4 = accumulated;
  const curves = [];
  const curvesInOrder = [];
  for (let i = 0; i < sections.length; i += 1) {
    curves.push({ sum, offset: offset4, data: sections[i], root: false });
    offset4 -= sections[i].value / 100 * accumulated;
  }
  curves.push({ sum, offset: offset4, data: { color: rootColor }, root: true });
  curvesInOrder.push({ ...curves[curves.length - 1], lineRoundCaps: false });
  if (curves.length > 2) {
    curvesInOrder.push({ ...curves[0], lineRoundCaps: renderRoundedLineCaps });
    curvesInOrder.push({ ...curves[curves.length - 2], lineRoundCaps: renderRoundedLineCaps });
    for (let i = 1; i <= curves.length - 3; i += 1) {
      curvesInOrder.push({ ...curves[i], lineRoundCaps: false });
    }
  } else {
    curvesInOrder.push({ ...curves[0], lineRoundCaps: renderRoundedLineCaps });
  }
  return curvesInOrder;
}

// node_modules/@mantine/core/esm/components/RingProgress/RingProgress.module.css.mjs
var classes69 = { "root": "m_b32e4812", "svg": "m_d43b5134", "curve": "m_b1ca1fbf", "label": "m_b23f9dc4" };

// node_modules/@mantine/core/esm/components/RingProgress/RingProgress.mjs
function getClampedThickness(thickness, size4) {
  return Math.min(thickness || 12, (size4 || 120) / 4);
}
var defaultProps152 = {
  size: 120,
  thickness: 12
};
var varsResolver70 = createVarsResolver((_, { size: size4, thickness }) => ({
  root: {
    "--rp-size": rem(size4),
    "--rp-label-offset": rem(thickness * 2)
  }
}));
var RingProgress = factory((_props, ref) => {
  const props = useProps("RingProgress", defaultProps152, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    sections,
    size: size4,
    thickness,
    roundCaps,
    rootColor,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "RingProgress",
    classes: classes69,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver70
  });
  const clampedThickness = getClampedThickness(thickness, size4);
  const curves = getCurves({
    size: size4,
    thickness: clampedThickness,
    sections,
    renderRoundedLineCaps: roundCaps,
    rootColor
  }).map(({ data, sum, root, lineRoundCaps, offset: offset4 }, index5) => (0, import_react372.createElement)(
    Curve,
    {
      ...data,
      key: index5,
      size: size4,
      thickness: clampedThickness,
      sum,
      offset: offset4,
      color: data == null ? void 0 : data.color,
      root,
      lineRoundCaps,
      getStyles: getStyles2
    }
  ));
  return (0, import_jsx_runtime280.jsxs)(Box, { ...getStyles2("root"), size: size4, ref, ...others, children: [
    (0, import_jsx_runtime280.jsx)("svg", { ...getStyles2("svg"), children: curves }),
    label && (0, import_jsx_runtime280.jsx)("div", { ...getStyles2("label"), children: label })
  ] });
});
RingProgress.classes = classes69;
RingProgress.displayName = "@mantine/core/RingProgress";

// node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.mjs
var import_jsx_runtime281 = __toESM(require_jsx_runtime(), 1);
var import_react373 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.module.css.mjs
var classes70 = { "root": "m_cf365364", "indicator": "m_9e182ccd", "label": "m_1738fcb2", "input": "m_1714d588", "control": "m_69686b9b", "innerLabel": "m_78882f40" };

// node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.mjs
var defaultProps153 = {
  withItemsBorders: true
};
var varsResolver71 = createVarsResolver(
  (theme, { radius, color, transitionDuration, size: size4, transitionTimingFunction }) => ({
    root: {
      "--sc-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--sc-color": color ? getThemeColor(color, theme) : void 0,
      "--sc-shadow": color ? void 0 : "var(--mantine-shadow-xs)",
      "--sc-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--sc-transition-timing-function": transitionTimingFunction,
      "--sc-padding": getSize(size4, "sc-padding"),
      "--sc-font-size": getFontSize(size4)
    }
  })
);
var SegmentedControl = factory((_props, ref) => {
  var _a, _b;
  const props = useProps("SegmentedControl", defaultProps153, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    value,
    defaultValue,
    onChange,
    size: size4,
    name,
    disabled,
    readOnly,
    fullWidth,
    orientation,
    radius,
    color,
    transitionDuration,
    transitionTimingFunction,
    variant,
    autoContrast,
    withItemsBorders,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "SegmentedControl",
    props,
    classes: classes70,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver71
  });
  const theme = useMantineTheme();
  const _data = data.map(
    (item) => typeof item === "string" ? { label: item, value: item } : item
  );
  const initialized = useMounted();
  const [parent, setParent] = (0, import_react373.useState)(null);
  const [refs, setRefs] = (0, import_react373.useState)({});
  const setElementRef = (element, val) => {
    refs[val] = element;
    setRefs(refs);
  };
  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data) ? ((_a = _data.find((item) => !item.disabled)) == null ? void 0 : _a.value) ?? ((_b = data[0]) == null ? void 0 : _b.value) ?? null : null,
    onChange
  });
  const uuid = useId(name);
  const controls = _data.map((item) => (0, import_react373.createElement)(
    Box,
    {
      ...getStyles2("control"),
      mod: { active: _value === item.value, orientation },
      key: item.value
    },
    (0, import_react373.createElement)(
      "input",
      {
        ...getStyles2("input"),
        disabled: disabled || item.disabled,
        type: "radio",
        name: uuid,
        value: item.value,
        id: `${uuid}-${item.value}`,
        checked: _value === item.value,
        onChange: () => !readOnly && handleValueChange(item.value),
        "data-focus-ring": theme.focusRing,
        key: `${item.value}-input`
      }
    ),
    (0, import_react373.createElement)(
      Box,
      {
        component: "label",
        ...getStyles2("label"),
        mod: {
          active: _value === item.value && !(disabled || item.disabled),
          disabled: disabled || item.disabled,
          "read-only": readOnly
        },
        htmlFor: `${uuid}-${item.value}`,
        ref: (node) => setElementRef(node, item.value),
        __vars: {
          "--sc-label-color": color !== void 0 ? getContrastColor({ color, theme, autoContrast }) : void 0
        },
        key: `${item.value}-label`
      },
      (0, import_jsx_runtime281.jsx)("span", { ...getStyles2("innerLabel"), children: item.label })
    )
  ));
  const mergedRef = useMergedRef(ref, (node) => setParent(node));
  if (data.length === 0) {
    return null;
  }
  return (0, import_jsx_runtime281.jsxs)(
    Box,
    {
      ...getStyles2("root"),
      variant,
      size: size4,
      ref: mergedRef,
      mod: [
        {
          "full-width": fullWidth,
          orientation,
          initialized,
          "with-items-borders": withItemsBorders
        },
        mod
      ],
      ...others,
      role: "radiogroup",
      children: [
        typeof _value === "string" && (0, import_jsx_runtime281.jsx)(
          FloatingIndicator,
          {
            target: refs[_value],
            parent,
            component: "span",
            transitionDuration: "var(--sc-transition-duration)",
            ...getStyles2("indicator")
          }
        ),
        controls
      ]
    }
  );
});
SegmentedControl.classes = classes70;
SegmentedControl.displayName = "@mantine/core/SegmentedControl";

// node_modules/@mantine/core/esm/components/Select/Select.mjs
var import_jsx_runtime282 = __toESM(require_jsx_runtime(), 1);
var import_react374 = __toESM(require_react(), 1);
var defaultProps154 = {
  searchable: false,
  withCheckIcon: true,
  allowDeselect: true,
  checkIconPosition: "left"
};
var Select = factory((_props, ref) => {
  const props = useProps("Select", defaultProps154, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    value,
    defaultValue,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size: size4,
    searchable,
    rightSection,
    checkIconPosition,
    withCheckIcon,
    nothingFoundMessage,
    name,
    form,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    allowDeselect,
    error: error2,
    rightSectionPointerEvents,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    renderOption,
    onClear,
    autoComplete,
    scrollAreaProps,
    ...others
  } = props;
  const parsedData = (0, import_react374.useMemo)(() => getParsedComboboxData(data), [data]);
  const optionsLockup = (0, import_react374.useMemo)(() => getOptionsLockup(parsedData), [parsedData]);
  const _id = useId(id);
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const selectedOption = typeof _value === "string" ? optionsLockup[_value] : void 0;
  const previousSelectedOption = usePrevious(selectedOption);
  const [search, setSearch] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: selectedOption ? selectedOption.label : "",
    onChange: onSearchChange
  });
  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      onDropdownOpen == null ? void 0 : onDropdownOpen();
      combobox.updateSelectedOptionIndex("active", { scrollIntoView: true });
    },
    onDropdownClose: () => {
      onDropdownClose == null ? void 0 : onDropdownClose();
      combobox.resetSelectedOption();
    }
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  (0, import_react374.useEffect)(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);
  (0, import_react374.useEffect)(() => {
    if (value === null) {
      setSearch("");
    }
    if (typeof value === "string" && selectedOption && ((previousSelectedOption == null ? void 0 : previousSelectedOption.value) !== selectedOption.value || (previousSelectedOption == null ? void 0 : previousSelectedOption.label) !== selectedOption.label)) {
      setSearch(selectedOption.label);
    }
  }, [value, selectedOption]);
  const clearButton = clearable && !!_value && !disabled && !readOnly && (0, import_jsx_runtime282.jsx)(
    Combobox.ClearButton,
    {
      size: size4,
      ...clearButtonProps,
      onClear: () => {
        setValue(null, null);
        setSearch("");
        onClear == null ? void 0 : onClear();
      }
    }
  );
  return (0, import_jsx_runtime282.jsxs)(import_jsx_runtime282.Fragment, { children: [
    (0, import_jsx_runtime282.jsxs)(
      Combobox,
      {
        store: combobox,
        __staticSelector: "Select",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        readOnly,
        onOptionSubmit: (val) => {
          onOptionSubmit == null ? void 0 : onOptionSubmit(val);
          const optionLockup = allowDeselect ? optionsLockup[val].value === _value ? null : optionsLockup[val] : optionsLockup[val];
          const nextValue = optionLockup ? optionLockup.value : null;
          nextValue !== _value && setValue(nextValue, optionLockup);
          !controlled && setSearch(typeof nextValue === "string" ? (optionLockup == null ? void 0 : optionLockup.label) || "" : "");
          combobox.closeDropdown();
        },
        size: size4,
        ...comboboxProps,
        children: [
          (0, import_jsx_runtime282.jsx)(Combobox.Target, { targetType: searchable ? "input" : "button", autoComplete, children: (0, import_jsx_runtime282.jsx)(
            InputBase,
            {
              id: _id,
              ref,
              rightSection: rightSection || clearButton || (0, import_jsx_runtime282.jsx)(Combobox.Chevron, { size: size4, error: error2, unstyled }),
              rightSectionPointerEvents: rightSectionPointerEvents || (clearButton ? "all" : "none"),
              ...others,
              size: size4,
              __staticSelector: "Select",
              disabled,
              readOnly: readOnly || !searchable,
              value: search,
              onChange: (event) => {
                setSearch(event.currentTarget.value);
                combobox.openDropdown();
                selectFirstOptionOnChange && combobox.selectFirstOption();
              },
              onFocus: (event) => {
                searchable && combobox.openDropdown();
                onFocus == null ? void 0 : onFocus(event);
              },
              onBlur: (event) => {
                var _a;
                searchable && combobox.closeDropdown();
                setSearch(_value != null ? ((_a = optionsLockup[_value]) == null ? void 0 : _a.label) || "" : "");
                onBlur == null ? void 0 : onBlur(event);
              },
              onClick: (event) => {
                searchable ? combobox.openDropdown() : combobox.toggleDropdown();
                onClick == null ? void 0 : onClick(event);
              },
              classNames: resolvedClassNames,
              styles: resolvedStyles,
              unstyled,
              pointer: !searchable,
              error: error2
            }
          ) }),
          (0, import_jsx_runtime282.jsx)(
            OptionsDropdown,
            {
              data: parsedData,
              hidden: readOnly || disabled,
              filter,
              search,
              limit,
              hiddenWhenEmpty: !nothingFoundMessage,
              withScrollArea,
              maxDropdownHeight,
              filterOptions: searchable && (selectedOption == null ? void 0 : selectedOption.label) !== search,
              value: _value,
              checkIconPosition,
              withCheckIcon,
              nothingFoundMessage,
              unstyled,
              labelId: others.label ? `${_id}-label` : void 0,
              "aria-label": others.label ? void 0 : others["aria-label"],
              renderOption,
              scrollAreaProps
            }
          )
        ]
      }
    ),
    (0, import_jsx_runtime282.jsx)(
      Combobox.HiddenInput,
      {
        value: _value,
        name,
        form,
        disabled,
        ...hiddenInputProps
      }
    )
  ] });
});
Select.classes = { ...InputBase.classes, ...Combobox.classes };
Select.displayName = "@mantine/core/Select";

// node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGrid.mjs
var import_jsx_runtime284 = __toESM(require_jsx_runtime(), 1);
var import_react376 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGridVariables.mjs
var import_jsx_runtime283 = __toESM(require_jsx_runtime(), 1);
var import_react375 = __toESM(require_react(), 1);
function SimpleGridMediaVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const theme = useMantineTheme();
  const _verticalSpacing = verticalSpacing === void 0 ? spacing : verticalSpacing;
  const baseStyles = filterProps({
    "--sg-spacing-x": getSpacing(getBaseValue(spacing)),
    "--sg-spacing-y": getSpacing(getBaseValue(_verticalSpacing)),
    "--sg-cols": (_a = getBaseValue(cols)) == null ? void 0 : _a.toString()
  });
  const queries = keys(theme.breakpoints).reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-x"] = getSpacing(spacing[breakpoint]);
      }
      if (typeof _verticalSpacing === "object" && _verticalSpacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-y"] = getSpacing(_verticalSpacing[breakpoint]);
      }
      if (typeof cols === "object" && cols[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-cols"] = cols[breakpoint];
      }
      return acc;
    },
    {}
  );
  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );
  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
    styles: queries[breakpoint.value]
  }));
  return (0, import_jsx_runtime283.jsx)(InlineStyles, { styles: baseStyles, media, selector });
}
function getBreakpoints(values2) {
  if (typeof values2 === "object" && values2 !== null) {
    return keys(values2);
  }
  return [];
}
function sortBreakpoints(breakpoints) {
  return breakpoints.sort((a, b) => px(a) - px(b));
}
function getUniqueBreakpoints({
  spacing,
  verticalSpacing,
  cols
}) {
  const breakpoints = Array.from(
    /* @__PURE__ */ new Set([
      ...getBreakpoints(spacing),
      ...getBreakpoints(verticalSpacing),
      ...getBreakpoints(cols)
    ])
  );
  return sortBreakpoints(breakpoints);
}
function SimpleGridContainerVariables({
  spacing,
  verticalSpacing,
  cols,
  selector
}) {
  var _a;
  const _verticalSpacing = verticalSpacing === void 0 ? spacing : verticalSpacing;
  const baseStyles = filterProps({
    "--sg-spacing-x": getSpacing(getBaseValue(spacing)),
    "--sg-spacing-y": getSpacing(getBaseValue(_verticalSpacing)),
    "--sg-cols": (_a = getBaseValue(cols)) == null ? void 0 : _a.toString()
  });
  const uniqueBreakpoints = getUniqueBreakpoints({ spacing, verticalSpacing, cols });
  const queries = uniqueBreakpoints.reduce(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }
      if (typeof spacing === "object" && spacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-x"] = getSpacing(spacing[breakpoint]);
      }
      if (typeof _verticalSpacing === "object" && _verticalSpacing[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-spacing-y"] = getSpacing(_verticalSpacing[breakpoint]);
      }
      if (typeof cols === "object" && cols[breakpoint] !== void 0) {
        acc[breakpoint]["--sg-cols"] = cols[breakpoint];
      }
      return acc;
    },
    {}
  );
  const media = uniqueBreakpoints.map((breakpoint) => ({
    query: `simple-grid (min-width: ${breakpoint})`,
    styles: queries[breakpoint]
  }));
  return (0, import_jsx_runtime283.jsx)(InlineStyles, { styles: baseStyles, container: media, selector });
}

// node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGrid.module.css.mjs
var classes71 = { "container": "m_925c2d2c", "root": "m_2415a157" };

// node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGrid.mjs
var defaultProps155 = {
  cols: 1,
  spacing: "md",
  type: "media"
};
var SimpleGrid = factory((_props, ref) => {
  const props = useProps("SimpleGrid", defaultProps155, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing,
    type,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "SimpleGrid",
    classes: classes71,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const responsiveClassName = useRandomClassName();
  if (type === "container") {
    return (0, import_jsx_runtime284.jsxs)(import_jsx_runtime284.Fragment, { children: [
      (0, import_jsx_runtime284.jsx)(SimpleGridContainerVariables, { ...props, selector: `.${responsiveClassName}` }),
      (0, import_jsx_runtime284.jsx)("div", { ...getStyles2("container"), children: (0, import_jsx_runtime284.jsx)(Box, { ref, ...getStyles2("root", { className: responsiveClassName }), ...others }) })
    ] });
  }
  return (0, import_jsx_runtime284.jsxs)(import_jsx_runtime284.Fragment, { children: [
    (0, import_jsx_runtime284.jsx)(SimpleGridMediaVariables, { ...props, selector: `.${responsiveClassName}` }),
    (0, import_jsx_runtime284.jsx)(Box, { ref, ...getStyles2("root", { className: responsiveClassName }), ...others })
  ] });
});
SimpleGrid.classes = classes71;
SimpleGrid.displayName = "@mantine/core/SimpleGrid";

// node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs
var import_jsx_runtime285 = __toESM(require_jsx_runtime(), 1);
var import_react377 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Skeleton/Skeleton.module.css.mjs
var classes72 = { "root": "m_18320242", "skeleton-fade": "m_299c329c" };

// node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs
var defaultProps156 = {
  visible: true,
  animate: true
};
var varsResolver72 = createVarsResolver(
  (_, { width, height, radius, circle }) => ({
    root: {
      "--skeleton-height": rem(height),
      "--skeleton-width": circle ? rem(height) : rem(width),
      "--skeleton-radius": circle ? "1000px" : radius === void 0 ? void 0 : getRadius(radius)
    }
  })
);
var Skeleton = factory((_props, ref) => {
  const props = useProps("Skeleton", defaultProps156, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    width,
    height,
    circle,
    visible: visible2,
    radius,
    animate,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Skeleton",
    classes: classes72,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver72
  });
  return (0, import_jsx_runtime285.jsx)(Box, { ref, ...getStyles2("root"), mod: [{ visible: visible2, animate }, mod], ...others });
});
Skeleton.classes = classes72;
Skeleton.displayName = "@mantine/core/Skeleton";

// node_modules/@mantine/core/esm/components/Slider/Slider/Slider.mjs
var import_jsx_runtime291 = __toESM(require_jsx_runtime(), 1);
var import_react383 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs
var import_react378 = __toESM(require_react(), 1);
var import_jsx_runtime286 = __toESM(require_jsx_runtime(), 1);
var [SliderProvider, useSliderContext] = createSafeContext(
  "SliderProvider was not found in tree"
);

// node_modules/@mantine/core/esm/components/Slider/SliderRoot/SliderRoot.mjs
var import_jsx_runtime287 = __toESM(require_jsx_runtime(), 1);
var import_react379 = __toESM(require_react(), 1);
var SliderRoot = (0, import_react379.forwardRef)(
  ({ size: size4, disabled, variant, color, thumbSize, radius, ...others }, ref) => {
    const { getStyles: getStyles2 } = useSliderContext();
    return (0, import_jsx_runtime287.jsx)(
      Box,
      {
        tabIndex: -1,
        variant,
        size: size4,
        ref,
        ...getStyles2("root"),
        ...others
      }
    );
  }
);
SliderRoot.displayName = "@mantine/core/SliderRoot";

// node_modules/@mantine/core/esm/components/Slider/Thumb/Thumb.mjs
var import_jsx_runtime288 = __toESM(require_jsx_runtime(), 1);
var import_react380 = __toESM(require_react(), 1);
var Thumb3 = (0, import_react380.forwardRef)(
  ({
    max: max2,
    min: min2,
    value,
    position,
    label,
    dragging,
    onMouseDown,
    onKeyDownCapture,
    labelTransitionProps,
    labelAlwaysOn,
    thumbLabel,
    onFocus,
    onBlur,
    showLabelOnHover,
    isHovered,
    children = null,
    disabled
  }, ref) => {
    const { getStyles: getStyles2 } = useSliderContext();
    const [focused, setFocused] = (0, import_react380.useState)(false);
    const isVisible = labelAlwaysOn || dragging || focused || showLabelOnHover && isHovered;
    return (0, import_jsx_runtime288.jsxs)(
      Box,
      {
        tabIndex: 0,
        role: "slider",
        "aria-label": thumbLabel,
        "aria-valuemax": max2,
        "aria-valuemin": min2,
        "aria-valuenow": value,
        ref,
        __vars: { "--slider-thumb-offset": `${position}%` },
        ...getStyles2("thumb", { focusable: true }),
        mod: { dragging, disabled },
        onFocus: () => {
          setFocused(true);
          typeof onFocus === "function" && onFocus();
        },
        onBlur: () => {
          setFocused(false);
          typeof onBlur === "function" && onBlur();
        },
        onTouchStart: onMouseDown,
        onMouseDown,
        onKeyDownCapture,
        onClick: (event) => event.stopPropagation(),
        children: [
          children,
          (0, import_jsx_runtime288.jsx)(
            Transition,
            {
              mounted: label != null && !!isVisible,
              transition: "fade",
              duration: 0,
              ...labelTransitionProps,
              children: (transitionStyles) => (0, import_jsx_runtime288.jsx)("div", { ...getStyles2("label", { style: transitionStyles }), children: label })
            }
          )
        ]
      }
    );
  }
);
Thumb3.displayName = "@mantine/core/SliderThumb";

// node_modules/@mantine/core/esm/components/Slider/Track/Track.mjs
var import_jsx_runtime290 = __toESM(require_jsx_runtime(), 1);
var import_react382 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Slider/Marks/Marks.mjs
var import_jsx_runtime289 = __toESM(require_jsx_runtime(), 1);
var import_react381 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs
function getPosition({ value, min: min2, max: max2 }) {
  const position = (value - min2) / (max2 - min2) * 100;
  return Math.min(Math.max(position, 0), 100);
}

// node_modules/@mantine/core/esm/components/Slider/Marks/is-mark-filled.mjs
function isMarkFilled({ mark, offset: offset4, value, inverted = false }) {
  return inverted ? typeof offset4 === "number" ? mark.value <= offset4 || mark.value >= value : mark.value >= value : typeof offset4 === "number" ? mark.value >= offset4 && mark.value <= value : mark.value <= value;
}

// node_modules/@mantine/core/esm/components/Slider/Marks/Marks.mjs
function Marks({ marks, min: min2, max: max2, disabled, value, offset: offset4, inverted }) {
  const { getStyles: getStyles2 } = useSliderContext();
  if (!marks) {
    return null;
  }
  const items = marks.map((mark, index5) => (0, import_react381.createElement)(
    Box,
    {
      ...getStyles2("markWrapper"),
      __vars: { "--mark-offset": `${getPosition({ value: mark.value, min: min2, max: max2 })}%` },
      key: index5
    },
    (0, import_jsx_runtime289.jsx)(
      Box,
      {
        ...getStyles2("mark"),
        mod: { filled: isMarkFilled({ mark, value, offset: offset4, inverted }), disabled }
      }
    ),
    mark.label && (0, import_jsx_runtime289.jsx)("div", { ...getStyles2("markLabel"), children: mark.label })
  ));
  return (0, import_jsx_runtime289.jsx)("div", { children: items });
}
Marks.displayName = "@mantine/core/SliderMarks";

// node_modules/@mantine/core/esm/components/Slider/Track/Track.mjs
function Track({
  filled,
  children,
  offset: offset4,
  disabled,
  marksOffset,
  inverted,
  containerProps,
  ...others
}) {
  const { getStyles: getStyles2 } = useSliderContext();
  return (0, import_jsx_runtime290.jsx)(import_jsx_runtime290.Fragment, { children: (0, import_jsx_runtime290.jsx)(Box, { ...getStyles2("trackContainer"), mod: { disabled }, ...containerProps, children: (0, import_jsx_runtime290.jsxs)(Box, { ...getStyles2("track"), mod: { inverted, disabled }, children: [
    (0, import_jsx_runtime290.jsx)(
      Box,
      {
        mod: { inverted, disabled },
        __vars: {
          "--slider-bar-width": `calc(${filled}% + var(--slider-size))`,
          "--slider-bar-offset": `calc(${offset4}% - var(--slider-size))`
        },
        ...getStyles2("bar")
      }
    ),
    children,
    (0, import_jsx_runtime290.jsx)(Marks, { ...others, offset: marksOffset, disabled, inverted })
  ] }) }) });
}
Track.displayName = "@mantine/core/SliderTrack";

// node_modules/@mantine/core/esm/components/Slider/utils/get-change-value/get-change-value.mjs
function getChangeValue({
  value,
  containerWidth,
  min: min2,
  max: max2,
  step,
  precision
}) {
  const left = !containerWidth ? value : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
  const dx = left * (max2 - min2);
  const nextValue = (dx !== 0 ? Math.round(dx / step) * step : 0) + min2;
  const nextValueWithinStep = Math.max(nextValue, min2);
  if (precision !== void 0) {
    return Number(nextValueWithinStep.toFixed(precision));
  }
  return nextValueWithinStep;
}

// node_modules/@mantine/core/esm/components/Slider/utils/get-floating-value/get-gloating-value.mjs
function getFloatingValue(value, precision) {
  return parseFloat(value.toFixed(precision));
}

// node_modules/@mantine/core/esm/components/Slider/utils/get-precision/get-precision.mjs
function getPrecision(step) {
  if (!step)
    return 0;
  const split = step.toString().split(".");
  return split.length > 1 ? split[1].length : 0;
}

// node_modules/@mantine/core/esm/components/Slider/Slider.module.css.mjs
var classes73 = { "root": "m_dd36362e", "label": "m_c9357328", "thumb": "m_c9a9a60a", "trackContainer": "m_a8645c2", "track": "m_c9ade57f", "bar": "m_38aeed47", "markWrapper": "m_b7b0423a", "mark": "m_dd33bc19", "markLabel": "m_68c77a5b" };

// node_modules/@mantine/core/esm/components/Slider/Slider/Slider.mjs
var defaultProps157 = {
  radius: "xl",
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: false,
  thumbLabel: "",
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v
};
var varsResolver73 = createVarsResolver(
  (theme, { size: size4, color, thumbSize, radius }) => ({
    root: {
      "--slider-size": getSize(size4, "slider-size"),
      "--slider-color": color ? getThemeColor(color, theme) : void 0,
      "--slider-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--slider-thumb-size": thumbSize !== void 0 ? rem(thumbSize) : "calc(var(--slider-size) * 2)"
    }
  })
);
var Slider = factory((_props, ref) => {
  const props = useProps("Slider", defaultProps157, _props);
  const {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size: size4,
    min: min2,
    max: max2,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    className,
    style,
    vars,
    hiddenInputProps,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Slider",
    props,
    classes: classes73,
    classNames,
    className,
    styles,
    style,
    vars,
    varsResolver: varsResolver73,
    unstyled
  });
  const { dir } = useDirection();
  const [hovered, setHovered] = (0, import_react383.useState)(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === "number" ? clamp(value, min2, max2) : value,
    defaultValue: typeof defaultValue === "number" ? clamp(defaultValue, min2, max2) : defaultValue,
    finalValue: clamp(0, min2, max2),
    onChange
  });
  const valueRef = (0, import_react383.useRef)(_value);
  const root = (0, import_react383.useRef)();
  const thumb = (0, import_react383.useRef)();
  const position = getPosition({ value: _value, min: min2, max: max2 });
  const scaledValue = scale(_value);
  const _label = typeof label === "function" ? label(scaledValue) : label;
  const precision = _precision ?? getPrecision(step);
  const handleChange = (0, import_react383.useCallback)(
    ({ x }) => {
      if (!disabled) {
        const nextValue = getChangeValue({
          value: x,
          min: min2,
          max: max2,
          step,
          precision
        });
        setValue(nextValue);
        valueRef.current = nextValue;
      }
    },
    [disabled, min2, max2, step, precision, setValue]
  );
  const { ref: container, active } = useMove(
    handleChange,
    { onScrubEnd: () => onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current) },
    dir
  );
  const handleTrackKeydownCapture = (event) => {
    var _a, _b, _c, _d, _e, _f;
    if (!disabled) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          (_a = thumb.current) == null ? void 0 : _a.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(_value + step, min2), max2),
            precision
          );
          setValue(nextValue);
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          (_b = thumb.current) == null ? void 0 : _b.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(dir === "rtl" ? _value - step : _value + step, min2), max2),
            precision
          );
          setValue(nextValue);
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          (_c = thumb.current) == null ? void 0 : _c.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(_value - step, min2), max2),
            precision
          );
          setValue(nextValue);
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          (_d = thumb.current) == null ? void 0 : _d.focus();
          const nextValue = getFloatingValue(
            Math.min(Math.max(dir === "rtl" ? _value + step : _value - step, min2), max2),
            precision
          );
          setValue(nextValue);
          onChangeEnd == null ? void 0 : onChangeEnd(nextValue);
          break;
        }
        case "Home": {
          event.preventDefault();
          (_e = thumb.current) == null ? void 0 : _e.focus();
          setValue(min2);
          onChangeEnd == null ? void 0 : onChangeEnd(min2);
          break;
        }
        case "End": {
          event.preventDefault();
          (_f = thumb.current) == null ? void 0 : _f.focus();
          setValue(max2);
          onChangeEnd == null ? void 0 : onChangeEnd(max2);
          break;
        }
      }
    }
  };
  return (0, import_jsx_runtime291.jsx)(SliderProvider, { value: { getStyles: getStyles2 }, children: (0, import_jsx_runtime291.jsxs)(
    SliderRoot,
    {
      ...others,
      ref: useMergedRef(ref, root),
      onKeyDownCapture: handleTrackKeydownCapture,
      onMouseDownCapture: () => {
        var _a;
        return (_a = root.current) == null ? void 0 : _a.focus();
      },
      size: size4,
      disabled,
      children: [
        (0, import_jsx_runtime291.jsx)(
          Track,
          {
            inverted,
            offset: 0,
            filled: position,
            marks,
            min: min2,
            max: max2,
            value: scaledValue,
            disabled,
            containerProps: {
              ref: container,
              onMouseEnter: showLabelOnHover ? () => setHovered(true) : void 0,
              onMouseLeave: showLabelOnHover ? () => setHovered(false) : void 0
            },
            children: (0, import_jsx_runtime291.jsx)(
              Thumb3,
              {
                max: max2,
                min: min2,
                value: scaledValue,
                position,
                dragging: active,
                label: _label,
                ref: thumb,
                labelTransitionProps,
                labelAlwaysOn,
                thumbLabel,
                showLabelOnHover,
                isHovered: hovered,
                disabled,
                children: thumbChildren
              }
            )
          }
        ),
        (0, import_jsx_runtime291.jsx)("input", { type: "hidden", name, value: scaledValue, ...hiddenInputProps })
      ]
    }
  ) });
});
Slider.classes = classes73;
Slider.displayName = "@mantine/core/Slider";

// node_modules/@mantine/core/esm/components/Slider/RangeSlider/RangeSlider.mjs
var import_jsx_runtime292 = __toESM(require_jsx_runtime(), 1);
var import_react384 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Slider/utils/get-client-position/get-client-position.mjs
function getClientPosition(event) {
  if ("TouchEvent" in window && event instanceof window.TouchEvent) {
    const touch = event.touches[0];
    return touch.clientX;
  }
  return event.clientX;
}

// node_modules/@mantine/core/esm/components/Slider/RangeSlider/RangeSlider.mjs
var varsResolver74 = createVarsResolver(
  (theme, { size: size4, color, thumbSize, radius }) => ({
    root: {
      "--slider-size": getSize(size4, "slider-size"),
      "--slider-color": color ? getThemeColor(color, theme) : void 0,
      "--slider-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--slider-thumb-size": thumbSize !== void 0 ? rem(thumbSize) : "calc(var(--slider-size) * 2)"
    }
  })
);
var defaultProps158 = {
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransitionProps: { transition: "fade", duration: 0 },
  labelAlwaysOn: false,
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v
};
var RangeSlider = factory((_props, ref) => {
  const props = useProps("RangeSlider", defaultProps158, _props);
  const {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size: size4,
    min: min2,
    max: max2,
    minRange,
    maxRange,
    step,
    precision: _precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransitionProps,
    labelAlwaysOn,
    thumbFromLabel,
    thumbToLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    className,
    style,
    vars,
    hiddenInputProps,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Slider",
    props,
    classes: classes73,
    classNames,
    className,
    styles,
    style,
    vars,
    varsResolver: varsResolver74,
    unstyled
  });
  const { dir } = useDirection();
  const [focused, setFocused] = (0, import_react384.useState)(-1);
  const [hovered, setHovered] = (0, import_react384.useState)(false);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [min2, max2],
    onChange
  });
  const valueRef = (0, import_react384.useRef)(_value);
  const thumbs = (0, import_react384.useRef)([]);
  const thumbIndex = (0, import_react384.useRef)(void 0);
  const positions = [
    getPosition({ value: _value[0], min: min2, max: max2 }),
    getPosition({ value: _value[1], min: min2, max: max2 })
  ];
  const precision = _precision ?? getPrecision(step);
  const _setValue = (val) => {
    setValue(val);
    valueRef.current = val;
  };
  (0, import_react384.useEffect)(
    () => {
      if (Array.isArray(value)) {
        valueRef.current = value;
      }
    },
    Array.isArray(value) ? [value[0], value[1]] : [null, null]
  );
  const setRangedValue = (val, index5, triggerChangeEnd) => {
    const clone = [...valueRef.current];
    clone[index5] = val;
    if (index5 === 0) {
      if (val > clone[1] - (minRange - 1e-9)) {
        clone[1] = Math.min(val + minRange, max2);
      }
      if (val > (max2 - (minRange - 1e-9) || min2)) {
        clone[index5] = valueRef.current[index5];
      }
      if (clone[1] - val > maxRange) {
        clone[1] = val + maxRange;
      }
    }
    if (index5 === 1) {
      if (val < clone[0] + minRange) {
        clone[0] = Math.max(val - minRange, min2);
      }
      if (val < clone[0] + minRange) {
        clone[index5] = valueRef.current[index5];
      }
      if (val - clone[0] > maxRange) {
        clone[0] = val - maxRange;
      }
    }
    clone[0] = getFloatingValue(clone[0], precision);
    clone[1] = getFloatingValue(clone[1], precision);
    _setValue(clone);
    if (triggerChangeEnd) {
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    }
  };
  const handleChange = (val) => {
    if (!disabled) {
      const nextValue = getChangeValue({
        value: val,
        min: min2,
        max: max2,
        step,
        precision
      });
      setRangedValue(nextValue, thumbIndex.current, false);
    }
  };
  const { ref: container, active } = useMove(
    ({ x }) => handleChange(x),
    { onScrubEnd: () => onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current) },
    dir
  );
  function handleThumbMouseDown(index5) {
    thumbIndex.current = index5;
  }
  const handleTrackMouseDownCapture = (event) => {
    container.current.focus();
    const rect = container.current.getBoundingClientRect();
    const changePosition = getClientPosition(event.nativeEvent);
    const changeValue = getChangeValue({
      value: changePosition - rect.left,
      max: max2,
      min: min2,
      step,
      containerWidth: rect.width
    });
    const nearestHandle = Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
    const _nearestHandle = dir === "ltr" ? nearestHandle : nearestHandle === 1 ? 0 : 1;
    thumbIndex.current = _nearestHandle;
  };
  const getFocusedThumbIndex = () => {
    if (focused !== 1 && focused !== 0) {
      setFocused(0);
      return 0;
    }
    return focused;
  };
  const handleTrackKeydownCapture = (event) => {
    if (!disabled) {
      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(Math.max(valueRef.current[focusedIndex] + step, min2), max2),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(
                Math.max(
                  dir === "rtl" ? valueRef.current[focusedIndex] - step : valueRef.current[focusedIndex] + step,
                  min2
                ),
                max2
              ),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(Math.max(valueRef.current[focusedIndex] - step, min2), max2),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            getFloatingValue(
              Math.min(
                Math.max(
                  dir === "rtl" ? valueRef.current[focusedIndex] + step : valueRef.current[focusedIndex] - step,
                  min2
                ),
                max2
              ),
              precision
            ),
            focusedIndex,
            true
          );
          break;
        }
      }
    }
  };
  const sharedThumbProps = {
    max: max2,
    min: min2,
    size: size4,
    labelTransitionProps,
    labelAlwaysOn,
    onBlur: () => setFocused(-1)
  };
  const hasArrayThumbChildren = Array.isArray(thumbChildren);
  return (0, import_jsx_runtime292.jsx)(SliderProvider, { value: { getStyles: getStyles2 }, children: (0, import_jsx_runtime292.jsxs)(SliderRoot, { ...others, size: size4, ref, disabled, children: [
    (0, import_jsx_runtime292.jsxs)(
      Track,
      {
        offset: positions[0],
        marksOffset: _value[0],
        filled: positions[1] - positions[0],
        marks,
        inverted,
        min: min2,
        max: max2,
        value: _value[1],
        disabled,
        containerProps: {
          ref: container,
          onMouseEnter: showLabelOnHover ? () => setHovered(true) : void 0,
          onMouseLeave: showLabelOnHover ? () => setHovered(false) : void 0,
          onTouchStartCapture: handleTrackMouseDownCapture,
          onTouchEndCapture: () => {
            thumbIndex.current = -1;
          },
          onMouseDownCapture: handleTrackMouseDownCapture,
          onMouseUpCapture: () => {
            thumbIndex.current = -1;
          },
          onKeyDownCapture: handleTrackKeydownCapture
        },
        children: [
          (0, import_jsx_runtime292.jsx)(
            Thumb3,
            {
              ...sharedThumbProps,
              value: scale(_value[0]),
              position: positions[0],
              dragging: active,
              label: typeof label === "function" ? label(getFloatingValue(scale(_value[0]), precision)) : label,
              ref: (node) => {
                thumbs.current[0] = node;
              },
              thumbLabel: thumbFromLabel,
              onMouseDown: () => handleThumbMouseDown(0),
              onFocus: () => setFocused(0),
              showLabelOnHover,
              isHovered: hovered,
              disabled,
              children: hasArrayThumbChildren ? thumbChildren[0] : thumbChildren
            }
          ),
          (0, import_jsx_runtime292.jsx)(
            Thumb3,
            {
              ...sharedThumbProps,
              thumbLabel: thumbToLabel,
              value: scale(_value[1]),
              position: positions[1],
              dragging: active,
              label: typeof label === "function" ? label(getFloatingValue(scale(_value[1]), precision)) : label,
              ref: (node) => {
                thumbs.current[1] = node;
              },
              onMouseDown: () => handleThumbMouseDown(1),
              onFocus: () => setFocused(1),
              showLabelOnHover,
              isHovered: hovered,
              disabled,
              children: hasArrayThumbChildren ? thumbChildren[1] : thumbChildren
            }
          )
        ]
      }
    ),
    (0, import_jsx_runtime292.jsx)("input", { type: "hidden", name: `${name}_from`, value: _value[0], ...hiddenInputProps }),
    (0, import_jsx_runtime292.jsx)("input", { type: "hidden", name: `${name}_to`, value: _value[1], ...hiddenInputProps })
  ] }) });
});
RangeSlider.classes = classes73;
RangeSlider.displayName = "@mantine/core/RangeSlider";

// node_modules/@mantine/core/esm/components/Space/Space.mjs
var import_jsx_runtime293 = __toESM(require_jsx_runtime(), 1);
var import_react385 = __toESM(require_react(), 1);
var defaultProps159 = {};
var Space = factory((props, ref) => {
  const { w, h, miw, mih, ...others } = useProps("Space", defaultProps159, props);
  return (0, import_jsx_runtime293.jsx)(Box, { ref, ...others, w, miw: miw ?? w, h, mih: mih ?? h });
});
Space.displayName = "@mantine/core/Space";

// node_modules/@mantine/core/esm/components/Spoiler/Spoiler.mjs
var import_jsx_runtime294 = __toESM(require_jsx_runtime(), 1);
var import_react386 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Spoiler/Spoiler.module.css.mjs
var classes74 = { "root": "m_559cce2d", "content": "m_b912df4e", "control": "m_b9131032" };

// node_modules/@mantine/core/esm/components/Spoiler/Spoiler.mjs
var defaultProps160 = {
  maxHeight: 100,
  initialState: false
};
var varsResolver75 = createVarsResolver((_, { transitionDuration }) => ({
  root: {
    "--spoiler-transition-duration": transitionDuration !== void 0 ? `${transitionDuration}ms` : void 0
  }
}));
var Spoiler = factory((_props, ref) => {
  const props = useProps("Spoiler", defaultProps160, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef,
    transitionDuration,
    id,
    expanded,
    onExpandedChange,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Spoiler",
    classes: classes74,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver75
  });
  const _id = useId(id);
  const regionId = `${_id}-region`;
  const [show, setShowState] = useUncontrolled({
    value: expanded,
    defaultValue: initialState,
    finalValue: false,
    onChange: onExpandedChange
  });
  const { ref: contentRef, height } = useElementSize();
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const spoiler = spoilerMoreContent !== null && maxHeight < height;
  return (0, import_jsx_runtime294.jsxs)(
    Box,
    {
      ...getStyles2("root"),
      id: _id,
      ref,
      "data-has-spoiler": spoiler || void 0,
      ...others,
      children: [
        spoiler && (0, import_jsx_runtime294.jsx)(
          Anchor,
          {
            component: "button",
            type: "button",
            ref: controlRef,
            onClick: () => setShowState(!show),
            "aria-expanded": show,
            "aria-controls": regionId,
            ...getStyles2("control"),
            children: spoilerMoreContent
          }
        ),
        (0, import_jsx_runtime294.jsx)(
          "div",
          {
            ...getStyles2("content", {
              style: { maxHeight: !show ? rem(maxHeight) : height ? rem(height) : void 0 }
            }),
            "data-reduce-motion": true,
            role: "region",
            id: regionId,
            children: (0, import_jsx_runtime294.jsx)("div", { ref: contentRef, children })
          }
        )
      ]
    }
  );
});
Spoiler.classes = classes74;
Spoiler.displayName = "@mantine/core/Spoiler";

// node_modules/@mantine/core/esm/components/Stack/Stack.mjs
var import_jsx_runtime295 = __toESM(require_jsx_runtime(), 1);
var import_react387 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs
var classes75 = { "root": "m_6d731127" };

// node_modules/@mantine/core/esm/components/Stack/Stack.mjs
var defaultProps161 = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
};
var varsResolver76 = createVarsResolver((_, { gap, align, justify }) => ({
  root: {
    "--stack-gap": getSpacing(gap),
    "--stack-align": align,
    "--stack-justify": justify
  }
}));
var Stack = factory((_props, ref) => {
  const props = useProps("Stack", defaultProps161, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Stack",
    props,
    classes: classes75,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver76
  });
  return (0, import_jsx_runtime295.jsx)(Box, { ref, ...getStyles2("root"), variant, ...others });
});
Stack.classes = classes75;
Stack.displayName = "@mantine/core/Stack";

// node_modules/@mantine/core/esm/components/Stepper/Stepper.mjs
var import_jsx_runtime298 = __toESM(require_jsx_runtime(), 1);
var import_react390 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Stepper/Stepper.context.mjs
var import_react388 = __toESM(require_react(), 1);
var import_jsx_runtime296 = __toESM(require_jsx_runtime(), 1);
var [StepperProvider, useStepperContext] = createSafeContext(
  "Stepper component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Stepper/StepperCompleted/StepperCompleted.mjs
var StepperCompleted = () => null;
StepperCompleted.displayName = "@mantine/core/StepperCompleted";

// node_modules/@mantine/core/esm/components/Stepper/StepperStep/StepperStep.mjs
var import_jsx_runtime297 = __toESM(require_jsx_runtime(), 1);
var import_react389 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Stepper/Stepper.module.css.mjs
var classes76 = { "root": "m_cbb4ea7e", "steps": "m_aaf89d0b", "separator": "m_2a371ac9", "content": "m_78da155d", "step": "m_cbb57068", "step--horizontal": "m_f56b1e2c", "step--vertical": "m_833edb7e", "verticalSeparator": "m_6496b3f3", "stepWrapper": "m_818e70b", "stepIcon": "m_1959ad01", "stepCompletedIcon": "m_a79331dc", "stepBody": "m_1956aa2a", "stepLabel": "m_12051f6c", "stepDescription": "m_164eea74" };

// node_modules/@mantine/core/esm/components/Stepper/StepperStep/StepperStep.mjs
var getStepFragment = (Fragment32, step) => {
  if (typeof Fragment32 === "function") {
    return (0, import_jsx_runtime297.jsx)(Fragment32, { step: step || 0 });
  }
  return Fragment32;
};
var defaultProps162 = {
  withIcon: true,
  allowStepClick: true,
  iconPosition: "left"
};
var StepperStep = factory((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    step,
    state,
    color,
    icon,
    completedIcon,
    progressIcon,
    label,
    description,
    withIcon,
    iconSize,
    loading,
    allowStepClick,
    allowStepSelect,
    iconPosition,
    orientation,
    mod,
    ...others
  } = useProps("StepperStep", defaultProps162, props);
  const ctx = useStepperContext();
  const theme = useMantineTheme();
  const stylesApi = { classNames, styles };
  const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
  const dataAttributes = {
    "data-progress": state === "stepProgress" || void 0,
    "data-completed": state === "stepCompleted" || void 0
  };
  return (0, import_jsx_runtime297.jsxs)(
    UnstyledButton,
    {
      ...ctx.getStyles("step", { className, style, variant: ctx.orientation, ...stylesApi }),
      mod: [
        { "icon-position": iconPosition || ctx.iconPosition, "allow-click": allowStepClick },
        mod
      ],
      ref,
      ...dataAttributes,
      ...others,
      __vars: { "--step-color": color ? getThemeColor(color, theme) : void 0 },
      tabIndex: allowStepClick ? 0 : -1,
      children: [
        withIcon && (0, import_jsx_runtime297.jsxs)("span", { ...ctx.getStyles("stepWrapper", stylesApi), children: [
          (0, import_jsx_runtime297.jsxs)("span", { ...ctx.getStyles("stepIcon", stylesApi), ...dataAttributes, children: [
            (0, import_jsx_runtime297.jsx)(Transition, { mounted: state === "stepCompleted", transition: "pop", duration: 200, children: (transitionStyles) => (0, import_jsx_runtime297.jsx)(
              "span",
              {
                ...ctx.getStyles("stepCompletedIcon", { style: transitionStyles, ...stylesApi }),
                children: loading ? (0, import_jsx_runtime297.jsx)(
                  Loader,
                  {
                    color: "var(--mantine-color-white)",
                    size: "calc(var(--stepper-icon-size) / 2)",
                    ...ctx.getStyles("stepLoader", stylesApi)
                  }
                ) : getStepFragment(completedIcon, step) || (0, import_jsx_runtime297.jsx)(CheckIcon, { size: "60%" })
              }
            ) }),
            state !== "stepCompleted" ? loading ? (0, import_jsx_runtime297.jsx)(
              Loader,
              {
                ...ctx.getStyles("stepLoader", stylesApi),
                size: "calc(var(--stepper-icon-size) / 2)",
                color
              }
            ) : getStepFragment(_icon || icon, step) : null
          ] }),
          orientation === "vertical" && (0, import_jsx_runtime297.jsx)(
            "span",
            {
              ...ctx.getStyles("verticalSeparator", stylesApi),
              "data-active": state === "stepCompleted" || void 0
            }
          )
        ] }),
        (label || description) && (0, import_jsx_runtime297.jsxs)(
          "span",
          {
            ...ctx.getStyles("stepBody", stylesApi),
            "data-orientation": ctx.orientation,
            "data-icon-position": iconPosition || ctx.iconPosition,
            children: [
              label && (0, import_jsx_runtime297.jsx)("span", { ...ctx.getStyles("stepLabel", stylesApi), children: getStepFragment(label, step) }),
              description && (0, import_jsx_runtime297.jsx)("span", { ...ctx.getStyles("stepDescription", stylesApi), children: getStepFragment(description, step) })
            ]
          }
        )
      ]
    }
  );
});
StepperStep.classes = classes76;
StepperStep.displayName = "@mantine/core/StepperStep";

// node_modules/@mantine/core/esm/components/Stepper/Stepper.mjs
var defaultProps163 = {
  orientation: "horizontal",
  iconPosition: "left",
  allowNextStepsSelect: true,
  wrap: true
};
var varsResolver77 = createVarsResolver(
  (theme, { color, iconSize, size: size4, contentPadding, radius, autoContrast }) => ({
    root: {
      "--stepper-color": color ? getThemeColor(color, theme) : void 0,
      "--stepper-icon-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0,
      "--stepper-icon-size": iconSize === void 0 ? getSize(size4, "stepper-icon-size") : rem(iconSize),
      "--stepper-content-padding": getSpacing(contentPadding),
      "--stepper-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--stepper-fz": getFontSize(size4),
      "--stepper-spacing": getSpacing(size4)
    }
  })
);
var Stepper = factory((_props, ref) => {
  var _a, _b, _c;
  const props = useProps("Stepper", defaultProps163, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    contentPadding,
    orientation,
    iconPosition,
    size: size4,
    radius,
    allowNextStepsSelect,
    wrap,
    autoContrast,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Stepper",
    classes: classes76,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver77
  });
  const convertedChildren = import_react390.Children.toArray(children);
  const _children = convertedChildren.filter((child) => child.type !== StepperCompleted);
  const completedStep = convertedChildren.find((item) => item.type === StepperCompleted);
  const items = _children.reduce((acc, item, index5) => {
    const state = active === index5 ? "stepProgress" : active > index5 ? "stepCompleted" : "stepInactive";
    const shouldAllowSelect = () => {
      if (typeof onStepClick !== "function") {
        return false;
      }
      if (typeof item.props.allowStepSelect === "boolean") {
        return item.props.allowStepSelect;
      }
      return state === "stepCompleted" || allowNextStepsSelect;
    };
    const isStepSelectionEnabled = shouldAllowSelect();
    acc.push(
      (0, import_react390.cloneElement)(item, {
        icon: item.props.icon || icon || index5 + 1,
        key: index5,
        step: index5,
        state,
        onClick: () => isStepSelectionEnabled && (onStepClick == null ? void 0 : onStepClick(index5)),
        allowStepClick: isStepSelectionEnabled,
        completedIcon: item.props.completedIcon || completedIcon,
        progressIcon: item.props.progressIcon || progressIcon,
        color: item.props.color || color,
        iconSize,
        radius,
        iconPosition: item.props.iconPosition || iconPosition,
        orientation,
        unstyled
      })
    );
    if (orientation === "horizontal" && index5 !== _children.length - 1) {
      acc.push(
        (0, import_react390.createElement)(
          "div",
          {
            ...getStyles2("separator"),
            "data-active": index5 < active || void 0,
            "data-orientation": orientation,
            key: `separator-${index5}`
          }
        )
      );
    }
    return acc;
  }, []);
  const stepContent = (_b = (_a = _children[active]) == null ? void 0 : _a.props) == null ? void 0 : _b.children;
  const completedContent = (_c = completedStep == null ? void 0 : completedStep.props) == null ? void 0 : _c.children;
  const content = active > _children.length - 1 ? completedContent : stepContent;
  return (0, import_jsx_runtime298.jsx)(StepperProvider, { value: { getStyles: getStyles2, orientation, iconPosition }, children: (0, import_jsx_runtime298.jsxs)(Box, { ...getStyles2("root"), ref, size: size4, ...others, children: [
    (0, import_jsx_runtime298.jsx)(
      Box,
      {
        ...getStyles2("steps"),
        mod: {
          orientation,
          "icon-position": iconPosition,
          wrap: wrap && orientation !== "vertical"
        },
        children: items
      }
    ),
    content && (0, import_jsx_runtime298.jsx)("div", { ...getStyles2("content"), children: content })
  ] }) });
});
Stepper.classes = classes76;
Stepper.displayName = "@mantine/core/Stepper";
Stepper.Completed = StepperCompleted;
Stepper.Step = StepperStep;

// node_modules/@mantine/core/esm/components/Switch/Switch.mjs
var import_jsx_runtime300 = __toESM(require_jsx_runtime(), 1);
var import_react393 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Switch/SwitchGroup.context.mjs
var import_react391 = __toESM(require_react(), 1);
var SwitchGroupContext = (0, import_react391.createContext)(null);
var SwitchGroupProvider = SwitchGroupContext.Provider;
var useSwitchGroupContext = () => (0, import_react391.useContext)(SwitchGroupContext);

// node_modules/@mantine/core/esm/components/Switch/SwitchGroup/SwitchGroup.mjs
var import_jsx_runtime299 = __toESM(require_jsx_runtime(), 1);
var import_react392 = __toESM(require_react(), 1);
var defaultProps164 = {};
var SwitchGroup = factory((props, ref) => {
  const { value, defaultValue, onChange, size: size4, wrapperProps, children, readOnly, ...others } = useProps("SwitchGroup", defaultProps164, props);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = event.currentTarget.value;
    !readOnly && setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return (0, import_jsx_runtime299.jsx)(SwitchGroupProvider, { value: { value: _value, onChange: handleChange, size: size4 }, children: (0, import_jsx_runtime299.jsx)(
    Input.Wrapper,
    {
      size: size4,
      ref,
      ...wrapperProps,
      ...others,
      labelElement: "div",
      __staticSelector: "SwitchGroup",
      children: (0, import_jsx_runtime299.jsx)(InputsGroupFieldset, { role: "group", children })
    }
  ) });
});
SwitchGroup.classes = Input.Wrapper.classes;
SwitchGroup.displayName = "@mantine/core/SwitchGroup";

// node_modules/@mantine/core/esm/components/Switch/Switch.module.css.mjs
var classes77 = { "root": "m_5f93f3bb", "input": "m_926b4011", "track": "m_9307d992", "thumb": "m_93039a1d", "trackLabel": "m_8277e082" };

// node_modules/@mantine/core/esm/components/Switch/Switch.mjs
var defaultProps165 = {
  labelPosition: "right"
};
var varsResolver78 = createVarsResolver((theme, { radius, color, size: size4 }) => ({
  root: {
    "--switch-radius": radius === void 0 ? void 0 : getRadius(radius),
    "--switch-height": getSize(size4, "switch-height"),
    "--switch-width": getSize(size4, "switch-width"),
    "--switch-thumb-size": getSize(size4, "switch-thumb-size"),
    "--switch-label-font-size": getSize(size4, "switch-label-font-size"),
    "--switch-track-label-padding": getSize(size4, "switch-track-label-padding"),
    "--switch-color": color ? getThemeColor(color, theme) : void 0
  }
}));
var Switch = factory((_props, ref) => {
  const props = useProps("Switch", defaultProps165, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size: size4,
    radius,
    wrapperProps,
    children,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error: error2,
    disabled,
    variant,
    rootRef,
    mod,
    ...others
  } = props;
  const ctx = useSwitchGroupContext();
  const _size = size4 || (ctx == null ? void 0 : ctx.size);
  const getStyles2 = useStyles({
    name: "Switch",
    props,
    classes: classes77,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver78
  });
  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  const [_checked, handleChange] = useUncontrolled({
    value: contextProps.checked ?? checked,
    defaultValue: defaultChecked,
    finalValue: false
  });
  return (0, import_jsx_runtime300.jsxs)(
    InlineInput,
    {
      ...getStyles2("root"),
      __staticSelector: "Switch",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error: error2,
      disabled,
      bodyElement: "label",
      labelElement: "span",
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant,
      ref: rootRef,
      mod,
      ...styleProps,
      ...wrapperProps,
      children: [
        (0, import_jsx_runtime300.jsx)(
          "input",
          {
            ...rest,
            disabled,
            checked: _checked,
            onChange: (event) => {
              var _a;
              ctx ? (_a = contextProps.onChange) == null ? void 0 : _a.call(contextProps, event) : onChange == null ? void 0 : onChange(event);
              handleChange(event.currentTarget.checked);
            },
            id: uuid,
            ref,
            type: "checkbox",
            role: "switch",
            ...getStyles2("input")
          }
        ),
        (0, import_jsx_runtime300.jsxs)(
          Box,
          {
            "aria-hidden": "true",
            mod: { error: error2, "label-position": labelPosition },
            ...getStyles2("track"),
            children: [
              (0, import_jsx_runtime300.jsx)(Box, { component: "span", mod: "reduce-motion", ...getStyles2("thumb"), children: thumbIcon }),
              (0, import_jsx_runtime300.jsx)("span", { ...getStyles2("trackLabel"), children: _checked ? onLabel : offLabel })
            ]
          }
        )
      ]
    }
  );
});
Switch.classes = { ...classes77, ...InlineInputClasses };
Switch.displayName = "@mantine/core/Switch";
Switch.Group = SwitchGroup;

// node_modules/@mantine/core/esm/components/Table/Table.mjs
var import_jsx_runtime305 = __toESM(require_jsx_runtime(), 1);
var import_react397 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Table/Table.components.mjs
var import_jsx_runtime302 = __toESM(require_jsx_runtime(), 1);
var import_react395 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Table/Table.context.mjs
var import_react394 = __toESM(require_react(), 1);
var import_jsx_runtime301 = __toESM(require_jsx_runtime(), 1);
var [TableProvider, useTableContext] = createSafeContext(
  "Table component was not found in the tree"
);

// node_modules/@mantine/core/esm/components/Table/Table.module.css.mjs
var classes78 = { "table": "m_b23fa0ef", "th": "m_4e7aa4f3", "tr": "m_4e7aa4fd", "td": "m_4e7aa4ef", "tbody": "m_b2404537", "thead": "m_b242d975", "caption": "m_9e5a3ac7", "scrollContainer": "m_a100c15", "scrollContainerInner": "m_62259741" };

// node_modules/@mantine/core/esm/components/Table/Table.components.mjs
function getDataAttributes(ctx, options) {
  if (!options) {
    return void 0;
  }
  const data = {};
  if (options.columnBorder && ctx.withColumnBorders) {
    data["data-with-column-border"] = true;
  }
  if (options.rowBorder && ctx.withRowBorders) {
    data["data-with-row-border"] = true;
  }
  if (options.striped && ctx.striped) {
    data["data-striped"] = ctx.striped;
  }
  if (options.highlightOnHover && ctx.highlightOnHover) {
    data["data-hover"] = true;
  }
  if (options.captionSide && ctx.captionSide) {
    data["data-side"] = ctx.captionSide;
  }
  if (options.stickyHeader && ctx.stickyHeader) {
    data["data-sticky"] = true;
  }
  return data;
}
function tableElement(element, options) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = factory((_props, ref) => {
    const props = useProps(name, {}, _props);
    const { classNames, className, style, styles, ...others } = props;
    const ctx = useTableContext();
    return (0, import_jsx_runtime302.jsx)(
      Box,
      {
        component: element,
        ref,
        ...getDataAttributes(ctx, options),
        ...ctx.getStyles(element, { className, classNames, style, styles, props }),
        ...others
      }
    );
  });
  Component.displayName = `@mantine/core/${name}`;
  Component.classes = classes78;
  return Component;
}
var TableTh = tableElement("th", { columnBorder: true });
var TableTd = tableElement("td", { columnBorder: true });
var TableTr = tableElement("tr", {
  rowBorder: true,
  striped: true,
  highlightOnHover: true
});
var TableThead = tableElement("thead", { stickyHeader: true });
var TableTbody = tableElement("tbody");
var TableTfoot = tableElement("tfoot");
var TableCaption = tableElement("caption", { captionSide: true });

// node_modules/@mantine/core/esm/components/Table/TableDataRenderer.mjs
var import_jsx_runtime303 = __toESM(require_jsx_runtime(), 1);
function TableDataRenderer({ data }) {
  return (0, import_jsx_runtime303.jsxs)(import_jsx_runtime303.Fragment, { children: [
    data.caption && (0, import_jsx_runtime303.jsx)(TableCaption, { children: data.caption }),
    data.head && (0, import_jsx_runtime303.jsx)(TableThead, { children: (0, import_jsx_runtime303.jsx)(TableTr, { children: data.head.map((item, index5) => (0, import_jsx_runtime303.jsx)(TableTh, { children: item }, index5)) }) }),
    data.body && (0, import_jsx_runtime303.jsx)(TableTbody, { children: data.body.map((row, rowIndex) => (0, import_jsx_runtime303.jsx)(TableTr, { children: row.map((item, index5) => (0, import_jsx_runtime303.jsx)(TableTd, { children: item }, index5)) }, rowIndex)) }),
    data.foot && (0, import_jsx_runtime303.jsx)(TableTfoot, { children: (0, import_jsx_runtime303.jsx)(TableTr, { children: data.foot.map((item, index5) => (0, import_jsx_runtime303.jsx)(TableTh, { children: item }, index5)) }) })
  ] });
}
TableDataRenderer.displayName = "@mantine/core/TableDataRenderer";

// node_modules/@mantine/core/esm/components/Table/TableScrollContainer.mjs
var import_jsx_runtime304 = __toESM(require_jsx_runtime(), 1);
var import_react396 = __toESM(require_react(), 1);
var defaultProps166 = {
  type: "scrollarea"
};
var varsResolver79 = createVarsResolver((_, { minWidth, type }) => ({
  scrollContainer: {
    "--table-min-width": rem(minWidth),
    "--table-overflow": type === "native" ? "auto" : void 0
  }
}));
var TableScrollContainer = factory((_props, ref) => {
  const props = useProps("TableScrollContainer", defaultProps166, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    minWidth,
    type,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "TableScrollContainer",
    classes: classes78,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver79,
    rootSelector: "scrollContainer"
  });
  return (0, import_jsx_runtime304.jsx)(
    Box,
    {
      component: type === "scrollarea" ? ScrollArea : "div",
      ...type === "scrollarea" ? { offsetScrollbars: "x" } : {},
      ref,
      ...getStyles2("scrollContainer"),
      ...others,
      children: (0, import_jsx_runtime304.jsx)("div", { ...getStyles2("scrollContainerInner"), children })
    }
  );
});
TableScrollContainer.classes = classes78;
TableScrollContainer.displayName = "@mantine/core/TableScrollContainer";

// node_modules/@mantine/core/esm/components/Table/Table.mjs
var defaultProps167 = {
  withRowBorders: true,
  verticalSpacing: 7
};
var varsResolver80 = createVarsResolver(
  (theme, {
    layout,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    borderColor,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    stickyHeaderOffset,
    stickyHeader
  }) => ({
    table: {
      "--table-layout": layout,
      "--table-caption-side": captionSide,
      "--table-horizontal-spacing": getSpacing(horizontalSpacing),
      "--table-vertical-spacing": getSpacing(verticalSpacing),
      "--table-border-color": borderColor ? getThemeColor(borderColor, theme) : void 0,
      "--table-striped-color": striped && stripedColor ? getThemeColor(stripedColor, theme) : void 0,
      "--table-highlight-on-hover-color": highlightOnHover && highlightOnHoverColor ? getThemeColor(highlightOnHoverColor, theme) : void 0,
      "--table-sticky-header-offset": stickyHeader ? rem(stickyHeaderOffset) : void 0
    }
  })
);
var Table = factory((_props, ref) => {
  const props = useProps("Table", defaultProps167, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withTableBorder,
    borderColor,
    layout,
    variant,
    data,
    children,
    stickyHeader,
    stickyHeaderOffset,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Table",
    props,
    className,
    style,
    classes: classes78,
    classNames,
    styles,
    unstyled,
    rootSelector: "table",
    vars,
    varsResolver: varsResolver80
  });
  return (0, import_jsx_runtime305.jsx)(
    TableProvider,
    {
      value: {
        getStyles: getStyles2,
        stickyHeader,
        striped: striped === true ? "odd" : striped || void 0,
        highlightOnHover,
        withColumnBorders,
        withRowBorders,
        captionSide: captionSide || "bottom"
      },
      children: (0, import_jsx_runtime305.jsx)(
        Box,
        {
          component: "table",
          variant,
          ref,
          mod: [{ "data-with-table-border": withTableBorder }, mod],
          ...getStyles2("table"),
          ...others,
          children: children || !!data && (0, import_jsx_runtime305.jsx)(TableDataRenderer, { data })
        }
      )
    }
  );
});
Table.classes = classes78;
Table.displayName = "@mantine/core/Table";
Table.Td = TableTd;
Table.Th = TableTh;
Table.Tr = TableTr;
Table.Thead = TableThead;
Table.Tbody = TableTbody;
Table.Tfoot = TableTfoot;
Table.Caption = TableCaption;
Table.ScrollContainer = TableScrollContainer;
Table.DataRenderer = TableDataRenderer;

// node_modules/@mantine/core/esm/components/Tabs/Tabs.mjs
var import_jsx_runtime310 = __toESM(require_jsx_runtime(), 1);
var import_react402 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Tabs/Tabs.context.mjs
var import_react398 = __toESM(require_react(), 1);
var import_jsx_runtime306 = __toESM(require_jsx_runtime(), 1);
var [TabsProvider, useTabsContext] = createSafeContext(
  "Tabs component was not found in the tree"
);

// node_modules/@mantine/core/esm/components/Tabs/TabsList/TabsList.mjs
var import_jsx_runtime307 = __toESM(require_jsx_runtime(), 1);
var import_react399 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Tabs/Tabs.module.css.mjs
var classes79 = { "root": "m_89d60db1", "list--default": "m_576c9d4", "list": "m_89d33d6d", "panel": "m_b0c91715", "tab": "m_4ec4dce6", "tabSection": "m_fc420b1f", "tab--default": "m_539e827b", "list--outline": "m_6772fbd5", "tab--outline": "m_b59ab47c", "tab--pills": "m_c3381914" };

// node_modules/@mantine/core/esm/components/Tabs/TabsList/TabsList.mjs
var defaultProps168 = {};
var TabsList = factory((_props, ref) => {
  const props = useProps("TabsList", defaultProps168, _props);
  const { children, className, grow, justify, classNames, styles, style, mod, ...others } = props;
  const ctx = useTabsContext();
  return (0, import_jsx_runtime307.jsx)(
    Box,
    {
      ...others,
      ...ctx.getStyles("list", {
        className,
        style,
        classNames,
        styles,
        props,
        variant: ctx.variant
      }),
      ref,
      role: "tablist",
      variant: ctx.variant,
      mod: [
        {
          grow,
          orientation: ctx.orientation,
          placement: ctx.orientation === "vertical" && ctx.placement,
          inverted: ctx.inverted
        },
        mod
      ],
      "aria-orientation": ctx.orientation,
      __vars: { "--tabs-justify": justify },
      children
    }
  );
});
TabsList.classes = classes79;
TabsList.displayName = "@mantine/core/TabsList";

// node_modules/@mantine/core/esm/components/Tabs/TabsPanel/TabsPanel.mjs
var import_jsx_runtime308 = __toESM(require_jsx_runtime(), 1);
var import_react400 = __toESM(require_react(), 1);
var defaultProps169 = {};
var TabsPanel = factory((_props, ref) => {
  const props = useProps("TabsPanel", defaultProps169, _props);
  const { children, className, value, classNames, styles, style, mod, ...others } = props;
  const ctx = useTabsContext();
  const active = ctx.value === value;
  const content = ctx.keepMounted || props.keepMounted ? children : active ? children : null;
  return (0, import_jsx_runtime308.jsx)(
    Box,
    {
      ...others,
      ...ctx.getStyles("panel", {
        className,
        classNames,
        styles,
        style: [style, !active ? { display: "none" } : void 0],
        props
      }),
      ref,
      mod: [{ orientation: ctx.orientation }, mod],
      role: "tabpanel",
      id: ctx.getPanelId(value),
      "aria-labelledby": ctx.getTabId(value),
      children: content
    }
  );
});
TabsPanel.classes = classes79;
TabsPanel.displayName = "@mantine/core/TabsPanel";

// node_modules/@mantine/core/esm/components/Tabs/TabsTab/TabsTab.mjs
var import_jsx_runtime309 = __toESM(require_jsx_runtime(), 1);
var import_react401 = __toESM(require_react(), 1);
var defaultProps170 = {};
var TabsTab = factory((_props, ref) => {
  const props = useProps("TabsTab", defaultProps170, _props);
  const {
    className,
    children,
    rightSection,
    leftSection,
    value,
    onClick,
    onKeyDown,
    disabled,
    color,
    style,
    classNames,
    styles,
    vars,
    mod,
    ...others
  } = props;
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const ctx = useTabsContext();
  const active = value === ctx.value;
  const activateTab = (event) => {
    ctx.onChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick == null ? void 0 : onClick(event);
  };
  const stylesApiProps = { classNames, styles, props };
  return (0, import_jsx_runtime309.jsxs)(
    UnstyledButton,
    {
      ...others,
      ...ctx.getStyles("tab", { className, style, variant: ctx.variant, ...stylesApiProps }),
      disabled,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
      mod: [
        {
          active,
          disabled,
          orientation: ctx.orientation,
          inverted: ctx.inverted,
          placement: ctx.orientation === "vertical" && ctx.placement
        },
        mod
      ],
      ref,
      role: "tab",
      id: ctx.getTabId(value),
      "aria-selected": active,
      tabIndex: active || ctx.value === null ? 0 : -1,
      "aria-controls": ctx.getPanelId(value),
      onClick: activateTab,
      __vars: { "--tabs-color": color ? getThemeColor(color, theme) : void 0 },
      onKeyDown: createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        orientation: ctx.orientation || "horizontal",
        dir,
        onKeyDown
      }),
      children: [
        leftSection && (0, import_jsx_runtime309.jsx)("span", { ...ctx.getStyles("tabSection", stylesApiProps), "data-position": "left", children: leftSection }),
        children && (0, import_jsx_runtime309.jsx)("span", { ...ctx.getStyles("tabLabel", stylesApiProps), children }),
        rightSection && (0, import_jsx_runtime309.jsx)("span", { ...ctx.getStyles("tabSection", stylesApiProps), "data-position": "right", children: rightSection })
      ]
    }
  );
});
TabsTab.classes = classes79;
TabsTab.displayName = "@mantine/core/TabsTab";

// node_modules/@mantine/core/esm/components/Tabs/Tabs.mjs
var VALUE_ERROR = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value";
var defaultProps171 = {
  keepMounted: true,
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left"
};
var varsResolver81 = createVarsResolver((theme, { radius, color, autoContrast }) => ({
  root: {
    "--tabs-radius": getRadius(radius),
    "--tabs-color": getThemeColor(color, theme),
    "--tabs-text-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0
  }
}));
var Tabs = factory((_props, ref) => {
  const props = useProps("Tabs", defaultProps171, _props);
  const {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars,
    autoContrast,
    mod,
    ...others
  } = props;
  const uid = useId(id);
  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const getStyles2 = useStyles({
    name: "Tabs",
    props,
    classes: classes79,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver81
  });
  return (0, import_jsx_runtime310.jsx)(
    TabsProvider,
    {
      value: {
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        unstyled,
        getStyles: getStyles2
      },
      children: (0, import_jsx_runtime310.jsx)(
        Box,
        {
          ref,
          id: uid,
          variant,
          mod: [
            {
              orientation,
              inverted: orientation === "horizontal" && inverted,
              placement: orientation === "vertical" && placement
            },
            mod
          ],
          ...getStyles2("root"),
          ...others,
          children
        }
      )
    }
  );
});
Tabs.classes = classes79;
Tabs.displayName = "@mantine/core/Tabs";
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;

// node_modules/@mantine/core/esm/components/TagsInput/TagsInput.mjs
var import_jsx_runtime312 = __toESM(require_jsx_runtime(), 1);
var import_react404 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/TagsInput/filter-picked-tags.mjs
var import_jsx_runtime311 = __toESM(require_jsx_runtime(), 1);
var import_react403 = __toESM(require_react(), 1);
function filterPickedTags({ data, value }) {
  const normalizedValue = value.map((item) => item.trim().toLowerCase());
  const filtered = data.reduce((acc, item) => {
    if (isOptionsGroup(item)) {
      acc.push({
        group: item.group,
        items: item.items.filter(
          (option) => normalizedValue.indexOf(option.label.toLowerCase().trim()) === -1
        )
      });
    } else if (normalizedValue.indexOf(item.label.toLowerCase().trim()) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
  return filtered;
}

// node_modules/@mantine/core/esm/components/TagsInput/get-splitted-tags.mjs
function splitTags(splitChars, value) {
  if (!splitChars)
    return [value];
  return value.split(new RegExp(`[${splitChars.join("")}]`)).map((tag) => tag.trim()).filter((tag) => tag !== "");
}
function getSplittedTags({
  splitChars,
  allowDuplicates,
  maxTags,
  value,
  currentTags
}) {
  const splitted = splitTags(splitChars, value);
  const merged = allowDuplicates ? [...currentTags, ...splitted] : [.../* @__PURE__ */ new Set([...currentTags, ...splitted])];
  return maxTags ? merged.slice(0, maxTags) : merged;
}

// node_modules/@mantine/core/esm/components/TagsInput/TagsInput.mjs
var defaultProps172 = {
  maxTags: Infinity,
  allowDuplicates: false,
  acceptValueOnBlur: true,
  splitChars: [","],
  hiddenInputValuesDivider: ","
};
var TagsInput = factory((_props, ref) => {
  const props = useProps("TagsInput", defaultProps172, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size4,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    maxTags,
    allowDuplicates,
    onDuplicate,
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    readOnly,
    disabled,
    splitChars,
    onFocus,
    onBlur,
    onPaste,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    required,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error: error2,
    withErrorStyles,
    name,
    form,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    hiddenInputValuesDivider,
    mod,
    renderOption,
    onRemove,
    onClear,
    scrollAreaProps,
    acceptValueOnBlur,
    ...others
  } = props;
  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);
  const inputRef = (0, import_react404.useRef)(null);
  const _ref = useMergedRef(inputRef, ref);
  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose == null ? void 0 : onDropdownClose();
      combobox.resetSelectedOption();
    }
  });
  const {
    styleProps,
    rest: { type, autoComplete, ...rest }
  } = extractStyleProps(others);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: "",
    onChange: onSearchChange
  });
  const getStyles2 = useStyles({
    name: "TagsInput",
    classes: {},
    props,
    classNames,
    styles,
    unstyled
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  const handleValueSelect = (val) => {
    const isDuplicate = _value.some((tag) => tag.toLowerCase() === val.toLowerCase());
    if (isDuplicate) {
      onDuplicate == null ? void 0 : onDuplicate(val);
    }
    if ((!isDuplicate || isDuplicate && allowDuplicates) && _value.length < maxTags) {
      onOptionSubmit == null ? void 0 : onOptionSubmit(val);
      setSearchValue("");
      if (val.length > 0) {
        setValue([..._value, val]);
      }
    }
  };
  const handleInputKeydown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    const inputValue = _searchValue.trim();
    const { length } = inputValue;
    if (splitChars.includes(event.key) && length > 0) {
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: _searchValue,
          currentTags: _value
        })
      );
      setSearchValue("");
      event.preventDefault();
    }
    if (event.key === "Enter" && length > 0 && !event.nativeEvent.isComposing) {
      event.preventDefault();
      const hasActiveSelection = !!document.querySelector(
        `#${combobox.listId} [data-combobox-option][data-combobox-selected]`
      );
      if (hasActiveSelection) {
        return;
      }
      handleValueSelect(inputValue);
    }
    if (event.key === "Backspace" && length === 0 && _value.length > 0 && !event.nativeEvent.isComposing) {
      onRemove == null ? void 0 : onRemove(_value[_value.length - 1]);
      setValue(_value.slice(0, _value.length - 1));
    }
  };
  const handlePaste = (event) => {
    onPaste == null ? void 0 : onPaste(event);
    event.preventDefault();
    if (event.clipboardData) {
      const pastedText = event.clipboardData.getData("text/plain");
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: `${_searchValue}${pastedText}`,
          currentTags: _value
        })
      );
      setSearchValue("");
    }
  };
  const values2 = _value.map((item, index5) => (0, import_jsx_runtime312.jsx)(
    Pill,
    {
      withRemoveButton: !readOnly,
      onRemove: () => {
        setValue(_value.filter((i) => item !== i));
        onRemove == null ? void 0 : onRemove(item);
      },
      unstyled,
      disabled,
      ...getStyles2("pill"),
      children: item
    },
    `${item}-${index5}`
  ));
  (0, import_react404.useEffect)(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value, _searchValue]);
  const clearButton = clearable && _value.length > 0 && !disabled && !readOnly && (0, import_jsx_runtime312.jsx)(
    Combobox.ClearButton,
    {
      size: size4,
      ...clearButtonProps,
      onClear: () => {
        var _a;
        setValue([]);
        setSearchValue("");
        (_a = inputRef.current) == null ? void 0 : _a.focus();
        combobox.openDropdown();
        onClear == null ? void 0 : onClear();
      }
    }
  );
  return (0, import_jsx_runtime312.jsxs)(import_jsx_runtime312.Fragment, { children: [
    (0, import_jsx_runtime312.jsxs)(
      Combobox,
      {
        store: combobox,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        size: size4,
        readOnly,
        __staticSelector: "TagsInput",
        onOptionSubmit: (val) => {
          onOptionSubmit == null ? void 0 : onOptionSubmit(val);
          setSearchValue("");
          _value.length < maxTags && setValue([..._value, optionsLockup[val].label]);
          combobox.resetSelectedOption();
        },
        ...comboboxProps,
        children: [
          (0, import_jsx_runtime312.jsx)(Combobox.DropdownTarget, { children: (0, import_jsx_runtime312.jsx)(
            PillsInput,
            {
              ...styleProps,
              __staticSelector: "TagsInput",
              classNames: resolvedClassNames,
              styles: resolvedStyles,
              unstyled,
              size: size4,
              className,
              style,
              variant,
              disabled,
              radius,
              rightSection: rightSection || clearButton,
              rightSectionWidth,
              rightSectionPointerEvents,
              rightSectionProps,
              leftSection,
              leftSectionWidth,
              leftSectionPointerEvents,
              leftSectionProps,
              inputContainer,
              inputWrapperOrder,
              withAsterisk,
              required,
              labelProps,
              descriptionProps,
              errorProps,
              wrapperProps,
              description,
              label,
              error: error2,
              multiline: true,
              withErrorStyles,
              __stylesApiProps: { ...props, multiline: true },
              id: _id,
              mod,
              children: (0, import_jsx_runtime312.jsxs)(Pill.Group, { disabled, unstyled, ...getStyles2("pillsList"), children: [
                values2,
                (0, import_jsx_runtime312.jsx)(Combobox.EventsTarget, { autoComplete, children: (0, import_jsx_runtime312.jsx)(
                  PillsInput.Field,
                  {
                    ...rest,
                    ref: _ref,
                    ...getStyles2("inputField"),
                    unstyled,
                    onKeyDown: handleInputKeydown,
                    onFocus: (event) => {
                      onFocus == null ? void 0 : onFocus(event);
                      combobox.openDropdown();
                    },
                    onBlur: (event) => {
                      onBlur == null ? void 0 : onBlur(event);
                      acceptValueOnBlur && handleValueSelect(_searchValue);
                      combobox.closeDropdown();
                    },
                    onPaste: handlePaste,
                    value: _searchValue,
                    onChange: (event) => setSearchValue(event.currentTarget.value),
                    required: required && _value.length === 0,
                    disabled,
                    readOnly,
                    id: _id
                  }
                ) })
              ] })
            }
          ) }),
          (0, import_jsx_runtime312.jsx)(
            OptionsDropdown,
            {
              data: filterPickedTags({ data: parsedData, value: _value }),
              hidden: readOnly || disabled,
              filter,
              search: _searchValue,
              limit,
              hiddenWhenEmpty: true,
              withScrollArea,
              maxDropdownHeight,
              unstyled,
              labelId: label ? `${_id}-label` : void 0,
              "aria-label": label ? void 0 : others["aria-label"],
              renderOption,
              scrollAreaProps
            }
          )
        ]
      }
    ),
    (0, import_jsx_runtime312.jsx)(
      Combobox.HiddenInput,
      {
        name,
        form,
        value: _value,
        valuesDivider: hiddenInputValuesDivider,
        disabled,
        ...hiddenInputProps
      }
    )
  ] });
});
TagsInput.classes = { ...InputBase.classes, ...Combobox.classes };
TagsInput.displayName = "@mantine/core/TagsInput";

// node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs
var import_jsx_runtime313 = __toESM(require_jsx_runtime(), 1);
var import_react405 = __toESM(require_react(), 1);
var defaultProps173 = {};
var TextInput = factory((props, ref) => {
  const _props = useProps("TextInput", defaultProps173, props);
  return (0, import_jsx_runtime313.jsx)(InputBase, { component: "input", ref, ..._props, __staticSelector: "TextInput" });
});
TextInput.classes = InputBase.classes;
TextInput.displayName = "@mantine/core/TextInput";

// node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.mjs
var import_jsx_runtime314 = __toESM(require_jsx_runtime(), 1);
var import_react406 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.module.css.mjs
var classes80 = { "root": "m_7341320d" };

// node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.mjs
var defaultProps174 = {};
var varsResolver82 = createVarsResolver(
  (theme, { size: size4, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--ti-size": getSize(size4, "ti-size"),
        "--ti-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--ti-bg": color || variant ? colors.background : void 0,
        "--ti-color": color || variant ? colors.color : void 0,
        "--ti-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ThemeIcon = factory((_props, ref) => {
  const props = useProps("ThemeIcon", defaultProps174, _props);
  const { classNames, className, style, styles, unstyled, vars, autoContrast, ...others } = props;
  const getStyles2 = useStyles({
    name: "ThemeIcon",
    classes: classes80,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver82
  });
  return (0, import_jsx_runtime314.jsx)(Box, { ref, ...getStyles2("root"), ...others });
});
ThemeIcon.classes = classes80;
ThemeIcon.displayName = "@mantine/core/ThemeIcon";

// node_modules/@mantine/core/esm/components/Timeline/Timeline.mjs
var import_jsx_runtime317 = __toESM(require_jsx_runtime(), 1);
var import_react409 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Timeline/Timeline.context.mjs
var import_react407 = __toESM(require_react(), 1);
var import_jsx_runtime315 = __toESM(require_jsx_runtime(), 1);
var [TimelineProvider, useTimelineContext] = createSafeContext(
  "Timeline component was not found in tree"
);

// node_modules/@mantine/core/esm/components/Timeline/TimelineItem/TimelineItem.mjs
var import_jsx_runtime316 = __toESM(require_jsx_runtime(), 1);
var import_react408 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Timeline/Timeline.module.css.mjs
var classes81 = { "root": "m_43657ece", "itemTitle": "m_2ebe8099", "item": "m_436178ff", "itemBullet": "m_8affcee1", "itemBody": "m_540e8f41" };

// node_modules/@mantine/core/esm/components/Timeline/TimelineItem/TimelineItem.mjs
var defaultProps175 = {};
var TimelineItem = factory((_props, ref) => {
  const props = useProps("TimelineItem", defaultProps175, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    __active,
    __align,
    __lineActive,
    __vars,
    bullet,
    radius,
    color,
    lineVariant,
    children,
    title,
    mod,
    ...others
  } = props;
  const ctx = useTimelineContext();
  const theme = useMantineTheme();
  const stylesApiProps = { classNames, styles };
  return (0, import_jsx_runtime316.jsxs)(
    Box,
    {
      ...ctx.getStyles("item", { ...stylesApiProps, className, style }),
      mod: [{ "line-active": __lineActive, active: __active }, mod],
      ref,
      __vars: {
        "--tli-radius": radius ? getRadius(radius) : void 0,
        "--tli-color": color ? getThemeColor(color, theme) : void 0,
        "--tli-border-style": lineVariant || void 0
      },
      ...others,
      children: [
        (0, import_jsx_runtime316.jsx)(
          Box,
          {
            ...ctx.getStyles("itemBullet", stylesApiProps),
            mod: { "with-child": !!bullet, align: __align, active: __active },
            children: bullet
          }
        ),
        (0, import_jsx_runtime316.jsxs)("div", { ...ctx.getStyles("itemBody", stylesApiProps), children: [
          title && (0, import_jsx_runtime316.jsx)("div", { ...ctx.getStyles("itemTitle", stylesApiProps), children: title }),
          (0, import_jsx_runtime316.jsx)("div", { ...ctx.getStyles("itemContent", stylesApiProps), children })
        ] })
      ]
    }
  );
});
TimelineItem.classes = classes81;
TimelineItem.displayName = "@mantine/core/TimelineItem";

// node_modules/@mantine/core/esm/components/Timeline/Timeline.mjs
var defaultProps176 = {
  active: -1,
  align: "left",
  reverseActive: false
};
var varsResolver83 = createVarsResolver(
  (theme, { bulletSize, lineWidth, radius, color, autoContrast }) => ({
    root: {
      "--tl-bullet-size": rem(bulletSize),
      "--tl-line-width": rem(lineWidth),
      "--tl-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--tl-color": color ? getThemeColor(color, theme) : void 0,
      "--tl-icon-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0
    }
  })
);
var Timeline = factory((_props, ref) => {
  const props = useProps("Timeline", defaultProps176, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    active,
    color,
    radius,
    bulletSize,
    align,
    lineWidth,
    reverseActive,
    mod,
    autoContrast,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Timeline",
    classes: classes81,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver83
  });
  const _children = import_react409.Children.toArray(children);
  const items = _children.map(
    (item, index5) => {
      var _a, _b;
      return (0, import_react409.cloneElement)(item, {
        unstyled,
        __align: align,
        __active: ((_a = item.props) == null ? void 0 : _a.active) || (reverseActive ? active >= _children.length - index5 - 1 : active >= index5),
        __lineActive: ((_b = item.props) == null ? void 0 : _b.lineActive) || (reverseActive ? active >= _children.length - index5 - 1 : active - 1 >= index5)
      });
    }
  );
  return (0, import_jsx_runtime317.jsx)(TimelineProvider, { value: { getStyles: getStyles2 }, children: (0, import_jsx_runtime317.jsx)(Box, { ...getStyles2("root"), mod: [{ align }, mod], ref, ...others, children: items }) });
});
Timeline.classes = classes81;
Timeline.displayName = "@mantine/core/Timeline";
Timeline.Item = TimelineItem;

// node_modules/@mantine/core/esm/components/Title/Title.mjs
var import_jsx_runtime319 = __toESM(require_jsx_runtime(), 1);
var import_react411 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Title/get-title-size.mjs
var import_react410 = __toESM(require_react(), 1);
var import_jsx_runtime318 = __toESM(require_jsx_runtime(), 1);
var headings3 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function getTitleSize(order, size4) {
  const titleSize = size4 !== void 0 ? size4 : `h${order}`;
  if (headings3.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`
    };
  }
  return {
    fontSize: rem(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`
  };
}

// node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs
var classes82 = { "root": "m_8a5d1357" };

// node_modules/@mantine/core/esm/components/Title/Title.mjs
var defaultProps177 = {
  order: 1
};
var varsResolver84 = createVarsResolver((_, { order, size: size4, lineClamp, textWrap }) => {
  const sizeVariables = getTitleSize(order, size4);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize,
      "--title-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--title-text-wrap": textWrap
    }
  };
});
var Title = factory((_props, ref) => {
  const props = useProps("Title", defaultProps177, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size: size4,
    variant,
    lineClamp,
    textWrap,
    mod,
    ...others
  } = props;
  const getStyles2 = useStyles({
    name: "Title",
    props,
    classes: classes82,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver84
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return (0, import_jsx_runtime319.jsx)(
    Box,
    {
      ...getStyles2("root"),
      component: `h${order}`,
      variant,
      ref,
      mod: [{ order, "data-line-clamp": typeof lineClamp === "number" }, mod],
      size: size4,
      ...others
    }
  );
});
Title.classes = classes82;
Title.displayName = "@mantine/core/Title";

// node_modules/@mantine/core/esm/components/Tree/Tree.mjs
var import_jsx_runtime321 = __toESM(require_jsx_runtime(), 1);
var import_react414 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Tree/TreeNode.mjs
var import_jsx_runtime320 = __toESM(require_jsx_runtime(), 1);
var import_react412 = __toESM(require_react(), 1);
function getValuesRange(anchor, value, flatValues) {
  if (!anchor || !value) {
    return [];
  }
  const anchorIndex = flatValues.indexOf(anchor);
  const valueIndex = flatValues.indexOf(value);
  const start = Math.min(anchorIndex, valueIndex);
  const end = Math.max(anchorIndex, valueIndex);
  return flatValues.slice(start, end + 1);
}
function TreeNode({
  node,
  getStyles: getStyles2,
  rootIndex,
  controller,
  expandOnClick,
  selectOnClick,
  isSubtree,
  level = 1,
  renderNode,
  flatValues,
  allowRangeSelection,
  expandOnSpace
}) {
  const ref = (0, import_react412.useRef)(null);
  const nested = (node.children || []).map((child) => (0, import_jsx_runtime320.jsx)(
    TreeNode,
    {
      node: child,
      flatValues,
      getStyles: getStyles2,
      rootIndex: void 0,
      level: level + 1,
      controller,
      expandOnClick,
      isSubtree: true,
      renderNode,
      selectOnClick,
      allowRangeSelection,
      expandOnSpace
    },
    child.value
  ));
  const handleKeyDown = (event) => {
    var _a, _b, _c;
    if (event.nativeEvent.code === "ArrowRight") {
      event.stopPropagation();
      event.preventDefault();
      if (controller.expandedState[node.value]) {
        (_a = event.currentTarget.querySelector("[role=treeitem]")) == null ? void 0 : _a.focus();
      } else {
        controller.expand(node.value);
      }
    }
    if (event.nativeEvent.code === "ArrowLeft") {
      event.stopPropagation();
      event.preventDefault();
      if (controller.expandedState[node.value] && (node.children || []).length > 0) {
        controller.collapse(node.value);
      } else if (isSubtree) {
        (_b = findElementAncestor(event.currentTarget, "[role=treeitem]")) == null ? void 0 : _b.focus();
      }
    }
    if (event.nativeEvent.code === "ArrowDown" || event.nativeEvent.code === "ArrowUp") {
      const root = findElementAncestor(event.currentTarget, "[data-tree-root]");
      if (!root) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const nodes = Array.from(root.querySelectorAll("[role=treeitem]"));
      const index5 = nodes.indexOf(event.currentTarget);
      if (index5 === -1) {
        return;
      }
      const nextIndex = event.nativeEvent.code === "ArrowDown" ? index5 + 1 : index5 - 1;
      (_c = nodes[nextIndex]) == null ? void 0 : _c.focus();
      if (event.shiftKey) {
        const selectNode = nodes[nextIndex];
        if (selectNode) {
          controller.setSelectedState(
            getValuesRange(controller.anchorNode, selectNode.dataset.value, flatValues)
          );
        }
      }
    }
    if (event.nativeEvent.code === "Space" && expandOnSpace) {
      event.stopPropagation();
      event.preventDefault();
      controller.toggleExpanded(node.value);
    }
  };
  const handleNodeClick = (event) => {
    var _a, _b;
    event.stopPropagation();
    if (allowRangeSelection && event.shiftKey && controller.anchorNode) {
      controller.setSelectedState(getValuesRange(controller.anchorNode, node.value, flatValues));
      (_a = ref.current) == null ? void 0 : _a.focus();
    } else {
      expandOnClick && controller.toggleExpanded(node.value);
      selectOnClick && controller.select(node.value);
      (_b = ref.current) == null ? void 0 : _b.focus();
    }
  };
  const selected = controller.selectedState.includes(node.value);
  const elementProps = {
    ...getStyles2("label"),
    onClick: handleNodeClick,
    "data-selected": selected || void 0,
    "data-value": node.value,
    "data-hovered": controller.hoveredNode === node.value || void 0
  };
  return (0, import_jsx_runtime320.jsxs)(
    "li",
    {
      ...getStyles2("node", {
        style: { "--label-offset": `calc(var(--level-offset) * ${level - 1})` }
      }),
      role: "treeitem",
      "aria-selected": selected,
      "data-value": node.value,
      "data-selected": selected || void 0,
      "data-hovered": controller.hoveredNode === node.value || void 0,
      "data-level": level,
      tabIndex: rootIndex === 0 ? 0 : -1,
      onKeyDown: handleKeyDown,
      ref,
      onMouseOver: (event) => {
        event.stopPropagation();
        controller.setHoveredNode(node.value);
      },
      onMouseLeave: (event) => {
        event.stopPropagation();
        controller.setHoveredNode(null);
      },
      children: [
        typeof renderNode === "function" ? renderNode({
          node,
          level,
          selected,
          expanded: controller.expandedState[node.value] || false,
          hasChildren: Array.isArray(node.children) && node.children.length > 0,
          elementProps
        }) : (0, import_jsx_runtime320.jsx)("div", { ...elementProps, children: node.label }),
        controller.expandedState[node.value] && nested.length > 0 && (0, import_jsx_runtime320.jsx)("ul", { role: "group", ...getStyles2("subtree"), "data-level": level, children: nested })
      ]
    }
  );
}
TreeNode.displayName = "@mantine/core/TreeNode";

// node_modules/@mantine/core/esm/components/Tree/use-tree.mjs
var import_react413 = __toESM(require_react(), 1);
function getInitialState(initialState, data, value, acc = {}) {
  data.forEach((node) => {
    acc[node.value] = node.value in initialState ? initialState[node.value] : node.value === value;
    if (Array.isArray(node.children)) {
      getInitialState(initialState, node.children, value, acc);
    }
  });
  return acc;
}
function useTree({
  initialSelectedState = [],
  initialExpandedState = {},
  multiple = false
} = {}) {
  const [expandedState, setExpandedState] = (0, import_react413.useState)(initialExpandedState);
  const [selectedState, setSelectedState] = (0, import_react413.useState)(initialSelectedState);
  const [anchorNode, setAnchorNode] = (0, import_react413.useState)(null);
  const [hoveredNode, setHoveredNode] = (0, import_react413.useState)(null);
  const initialize = (0, import_react413.useCallback)(
    (data) => {
      setExpandedState((current) => getInitialState(current, data, selectedState));
    },
    [selectedState]
  );
  const toggleExpanded = (0, import_react413.useCallback)((value) => {
    setExpandedState((current) => ({ ...current, [value]: !current[value] }));
  }, []);
  const collapse = (0, import_react413.useCallback)((value) => {
    setExpandedState((current) => ({ ...current, [value]: false }));
  }, []);
  const expand = (0, import_react413.useCallback)((value) => {
    setExpandedState((current) => ({ ...current, [value]: true }));
  }, []);
  const expandAllNodes = (0, import_react413.useCallback)(() => {
    setExpandedState((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        next[key] = true;
      });
      return next;
    });
  }, []);
  const collapseAllNodes = (0, import_react413.useCallback)(() => {
    setExpandedState((current) => {
      const next = { ...current };
      Object.keys(next).forEach((key) => {
        next[key] = false;
      });
      return next;
    });
  }, []);
  const toggleSelected = (0, import_react413.useCallback)(
    (value) => setSelectedState((current) => {
      if (!multiple) {
        if (current.includes(value)) {
          setAnchorNode(null);
          return [];
        }
        setAnchorNode(value);
        return [value];
      }
      if (current.includes(value)) {
        setAnchorNode(null);
        return current.filter((item) => item !== value);
      }
      setAnchorNode(value);
      return [...current, value];
    }),
    []
  );
  const select = (0, import_react413.useCallback)((value) => {
    setAnchorNode(value);
    setSelectedState(
      (current) => multiple ? current.includes(value) ? current : [...current, value] : [value]
    );
  }, []);
  const deselect = (0, import_react413.useCallback)((value) => {
    anchorNode === value && setAnchorNode(null);
    setSelectedState((current) => current.filter((item) => item !== value));
  }, []);
  const clearSelected = (0, import_react413.useCallback)(() => {
    setSelectedState([]);
    setAnchorNode(null);
  }, []);
  return {
    multiple,
    expandedState,
    selectedState,
    anchorNode,
    initialize,
    toggleExpanded,
    collapse,
    expand,
    expandAllNodes,
    collapseAllNodes,
    setExpandedState,
    toggleSelected,
    select,
    deselect,
    clearSelected,
    setSelectedState,
    hoveredNode,
    setHoveredNode
  };
}

// node_modules/@mantine/core/esm/components/Tree/Tree.module.css.mjs
var classes83 = { "root": "m_f698e191", "subtree": "m_75f3ecf", "node": "m_f6970eb1", "label": "m_dc283425" };

// node_modules/@mantine/core/esm/components/Tree/Tree.mjs
function getFlatValues(data) {
  return data.reduce((acc, item) => {
    acc.push(item.value);
    if (item.children) {
      acc.push(...getFlatValues(item.children));
    }
    return acc;
  }, []);
}
var defaultProps178 = {
  expandOnClick: true,
  allowRangeSelection: true,
  expandOnSpace: true
};
var varsResolver85 = createVarsResolver((_theme, { levelOffset }) => ({
  root: {
    "--level-offset": getSpacing(levelOffset)
  }
}));
var Tree = factory((_props, ref) => {
  const props = useProps("Tree", defaultProps178, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    expandOnClick,
    tree,
    renderNode,
    selectOnClick,
    clearSelectionOnOutsideClick,
    allowRangeSelection,
    expandOnSpace,
    levelOffset,
    ...others
  } = props;
  const defaultController = useTree();
  const controller = tree || defaultController;
  const getStyles2 = useStyles({
    name: "Tree",
    classes: classes83,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver85
  });
  const clickOutsideRef = useClickOutside(
    () => clearSelectionOnOutsideClick && controller.clearSelected()
  );
  const mergedRef = useMergedRef(ref, clickOutsideRef);
  const flatValues = (0, import_react414.useMemo)(() => getFlatValues(data), [data]);
  (0, import_react414.useEffect)(() => {
    controller.initialize(data);
  }, [data]);
  const nodes = data.map((node, index5) => (0, import_jsx_runtime321.jsx)(
    TreeNode,
    {
      node,
      getStyles: getStyles2,
      rootIndex: index5,
      expandOnClick,
      selectOnClick,
      controller,
      renderNode,
      flatValues,
      allowRangeSelection,
      expandOnSpace
    },
    node.value
  ));
  return (0, import_jsx_runtime321.jsx)(
    Box,
    {
      component: "ul",
      ref: mergedRef,
      ...getStyles2("root"),
      ...others,
      role: "tree",
      "aria-multiselectable": controller.multiple,
      "data-tree-root": true,
      children: nodes
    }
  );
});
Tree.displayName = "@mantine/core/Tree";
Tree.classes = classes83;

// node_modules/@mantine/core/esm/components/TypographyStylesProvider/TypographyStylesProvider.mjs
var import_jsx_runtime322 = __toESM(require_jsx_runtime(), 1);
var import_react415 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/TypographyStylesProvider/TypographyStylesProvider.module.css.mjs
var classes84 = { "root": "m_d6493fad" };

// node_modules/@mantine/core/esm/components/TypographyStylesProvider/TypographyStylesProvider.mjs
var defaultProps179 = {};
var TypographyStylesProvider = factory((_props, ref) => {
  const props = useProps("TypographyStylesProvider", defaultProps179, _props);
  const { classNames, className, style, styles, unstyled, ...others } = props;
  const getStyles2 = useStyles({
    name: "TypographyStylesProvider",
    classes: classes84,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  return (0, import_jsx_runtime322.jsx)(Box, { ref, ...getStyles2("root"), ...others });
});
TypographyStylesProvider.classes = classes84;
TypographyStylesProvider.displayName = "@mantine/core/TypographyStylesProvider";
export {
  Accordion,
  AccordionChevron,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  ActionIcon,
  ActionIconGroup,
  Affix,
  Alert,
  AlphaSlider,
  Anchor,
  AppShell,
  AppShellAside,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection,
  AspectRatio,
  Autocomplete,
  Avatar,
  AvatarGroup,
  BackgroundImage,
  Badge,
  Blockquote,
  Box,
  Breadcrumbs,
  Burger,
  Button,
  ButtonGroup,
  Card,
  CardSection,
  Center,
  CheckIcon,
  Checkbox,
  CheckboxCard,
  CheckboxGroup,
  CheckboxIndicator,
  Chip,
  ChipGroup,
  CloseButton,
  CloseIcon,
  Code,
  Collapse,
  ColorInput,
  ColorPicker,
  ColorSchemeScript,
  ColorSwatch,
  Combobox,
  ComboboxChevron,
  ComboboxClearButton,
  ComboboxDropdown,
  ComboboxDropdownTarget,
  ComboboxEmpty,
  ComboboxEventsTarget,
  ComboboxFooter,
  ComboboxGroup,
  ComboboxHeader,
  ComboboxHiddenInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxSearch,
  ComboboxTarget,
  Container,
  CopyButton,
  DEFAULT_THEME,
  Dialog,
  DirectionContext,
  DirectionProvider,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerRoot,
  DrawerTitle,
  FLEX_STYLE_PROPS_DATA,
  FOCUS_CLASS_NAMES,
  Fieldset,
  FileButton,
  FileInput,
  Flex,
  FloatingArrow3 as FloatingArrow,
  FloatingIndicator,
  FocusTrap,
  FocusTrapInitialFocus,
  Grid,
  GridCol,
  Group,
  HeadlessMantineProvider,
  Highlight,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  HueSlider,
  Image,
  Indicator,
  InlineStyles,
  Input,
  InputBase,
  InputDescription,
  InputError,
  InputLabel,
  InputPlaceholder,
  InputWrapper,
  JsonInput,
  Kbd,
  List,
  ListItem,
  Loader,
  LoadingOverlay,
  transitions as MANTINE_TRANSITIONS,
  MantineContext,
  MantineProvider,
  MantineThemeContext,
  MantineThemeProvider,
  Mark,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Modal,
  ModalBase,
  ModalBaseBody,
  ModalBaseCloseButton,
  ModalBaseContent,
  ModalBaseHeader,
  ModalBaseOverlay,
  ModalBaseTitle,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  ModalTitle,
  MultiSelect,
  NativeScrollArea,
  NativeSelect,
  NavLink,
  Notification,
  NumberFormatter,
  NumberInput,
  OptionalPortal,
  OptionsDropdown,
  Overlay,
  Pagination,
  PaginationControl,
  PaginationDots,
  PaginationFirst,
  PaginationItems,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
  Paper,
  PasswordInput,
  Pill,
  PillGroup,
  PillsInput,
  PillsInputField,
  PinInput,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Portal,
  Progress,
  ProgressLabel,
  ProgressRoot,
  ProgressSection,
  Radio,
  RadioCard,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RangeSlider,
  Rating,
  Combination_default as RemoveScroll,
  RingProgress,
  STYlE_PROPS_DATA,
  ScrollArea,
  ScrollAreaAutosize,
  SegmentedControl,
  Select,
  SimpleGrid,
  Skeleton,
  Slider,
  Space,
  Spoiler,
  Stack,
  Stepper,
  StepperCompleted,
  StepperStep,
  Switch,
  SwitchGroup,
  Table,
  TableCaption,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  TagsInput,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Timeline,
  TimelineItem,
  Title,
  Tooltip,
  TooltipFloating,
  TooltipGroup,
  Transition,
  Tree,
  TypographyStylesProvider,
  UnstyledButton,
  VisuallyHidden,
  alpha,
  camelToKebabCase,
  closeOnEscape,
  colorsTuple,
  convertCssVariables,
  convertHsvaTo,
  createEventHandler,
  createOptionalContext,
  createPolymorphicComponent,
  createSafeContext,
  createScopedKeydownHandler,
  createTheme,
  createUseExternalEvents,
  createVarsResolver,
  darken,
  deepMerge,
  defaultCssVariablesResolver,
  defaultLoaders,
  defaultOptionsFilter,
  defaultVariantColorsResolver,
  em,
  extractStyleProps,
  factory,
  filterProps,
  findElementAncestor,
  getAutoContrastValue,
  getBaseValue,
  getBreakpointValue,
  getCSSColorVariables,
  getContextItemIndex,
  getContrastColor,
  getDefaultZIndex,
  getEnv,
  getFloatingPosition,
  getFontSize,
  getGradient,
  getLabelsLockup,
  getLineHeight,
  getOptionsLockup,
  getParsedComboboxData,
  getPrimaryContrastColor,
  getPrimaryShade,
  getRadius,
  getSafeId,
  getShadow,
  getSize,
  getSortedBreakpoints,
  getSpacing,
  getStyleObject,
  getThemeColor,
  getTransitionProps,
  isColorValid,
  isElement,
  isLightColor,
  isMantineColorScheme,
  isNumberLike,
  isOptionsGroup,
  isVirtualColor,
  keys,
  lighten,
  localStorageColorSchemeManager,
  luminance,
  mergeMantineTheme,
  mergeThemeOverrides,
  noop,
  parseColor,
  parseStyleProps,
  parseThemeColor,
  polymorphicFactory,
  px,
  rem,
  resolveClassNames,
  resolveStyles,
  rgba,
  stylesToString,
  toRgba,
  useCheckboxCardContext,
  useCheckboxGroupContext,
  useCombobox,
  useComboboxTargetProps,
  useComputedColorScheme,
  useDelayedHover,
  useDirection,
  useFloatingAutoUpdate,
  useHovered,
  useInputProps,
  useInputWrapperContext,
  useMantineClassNamesPrefix,
  useMantineColorScheme,
  useMantineContext,
  useMantineCssVariablesResolver,
  useMantineIsHeadless,
  useMantineStyleNonce,
  useMantineStylesTransform,
  useMantineSxTransform,
  useMantineTheme,
  useMantineWithStaticClasses,
  useMatches,
  useProps,
  useProviderColorScheme,
  useRadioCardContext,
  useRandomClassName,
  useResolvedStylesApi,
  useSafeMantineTheme,
  useStyles,
  useTree,
  useVirtualizedCombobox,
  validateMantineTheme,
  virtualColor
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@mantine_core.js.map
